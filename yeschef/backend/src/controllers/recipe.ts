import {Request, Response} from "express";
import {UploadedFile} from "express-fileupload"
import { Recipe  } from "../models";
import { SEARCH_RECIPES, SEARCH_RECIPES_RESPONSE } from "src/@types";
import { validateImageType } from "../utils";
import { upload } from "../cloudinary";

export const createRecipe = async(req: Request, res: Response) => {
    if(!req?.user) {
        return res.status(422).json({error: "Unable to process your request."});
    }
    if(!req.files || Object.keys(req.files).length === 0){
        return res.status(400).json({error: "No files were uploaded."});
    }

    const image = req.files.image as UploadedFile

    if(!validateImageType(image)) {
        return res.status(422).json({error: "Image type not supported"});
    }

    // const fileName = Date.now() + image.name;
    // const pathToFile = path.resolve(
    //     __dirname + "../../../assets/" + fileName
    // );

    // calling cloudinary
    let imageUrl: string;
    let imageId: string;

    try {
        const res = await upload(image.data, "Images");
        imageUrl = res.secure_url;
        imageId = res.public_id;
      } catch (error: any) {
        console.log(error, "CLOUDINARY ERROR");
        return res.status(400).json({ error: error?.error });
      }

      const {
        title,
        note,
        description,
        ingredients,
      }: { title: string; note: string; description: string; ingredients: string } =
        req.body;
    
      try {
        const recipe = await Recipe.create({
          user: req.user,
          title,
          note,
          description,
          ingredients,
          image: {
            url: imageUrl,
            id: imageId,
          },
        });
        return res.status(200).json({ message: "created successfully", ...recipe });
      } catch (error) {
        console.log(error);
        return res
          .status(500)
          .json({ error: "An error occured while processing your request" });
      }
   
};

export const searchRecipe = async (req: Request, res: Response) => {
    const {q} = req.query;
    const pipeline = [
        {
          $search: {
                index: "recipe",
                text: {
                query: q,
                path: {
                    wildcard: "*"
                },
                fuzzy: {}
            }
          }
        },
        {
            $lookup: {
                from: "users",
                localField: "user",
                foreignField: "_id",
                as: "user"
            }
        },
        {
            $project: {
                user: 1,
                note: 1,
                description: 1,
                title: 1,
                ingredients: 1,
                image: 1
            }
        }
    ];

    const recipes: SEARCH_RECIPES[] = await Recipe.aggregate(pipeline)
    .sort({_id: -1,})
    .exec();

    let response: SEARCH_RECIPES_RESPONSE[] = [];

    if(!!recipes?.length){
        response = recipes.map((recipe: SEARCH_RECIPES) => {
            const {user, ...rest} = recipe;
            const email = user[0].email
            return {
                user: email,
                ...rest
            }
        })
    }

    res.status(200).json(response);
};

export const getAllRecipes = async ( req: Request, res: Response) => {
    try {
        const recipes = await Recipe.find({})
        .populate("user", "email")
        .sort({_id:-1})
        .exec();

        return res.status(200).json(recipes);
    } catch (error) {
        console.log(error);
        res
        .status(500)
        .json({error: "An error occurred while processing your request"});
    }
}

export const getRecipe = async (req: Request, res: Response) => {
    const { id } = req.params;

    try{
        const recipe = await Recipe.findById(id).populate('user', 'email').exec();
        if(!recipe){
            return res.status(404).json({error: "recipe not found"});
        }
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({error: "An error occured while processing your request"});
    }
}

export const getUserRecipes = async (req: Request, res: Response) => {
    const {userId} = req.params;
    try {
        const recipes = await Recipe.find({ user: userId})
        .populate("user", "email")
        .sort({_id:-1})
        .exec();

        if(!recipes?.length){
            return res.status(404).json({error: "recipes not found"})
        }
        
        res.status(200).json(recipes);
    } catch (error) {
        console.log(error);
        res
        .status(500)
        .json({error: "An error occurred while processing your request"});
    }
}