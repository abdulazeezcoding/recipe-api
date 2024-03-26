import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async (req, res, next) => {
  try {
    // Add Recipe to the database
    console.log(req.file);
    const createResult = await RecipeModel.create({
      ...req.body,
      image:req.file.filename
    });
    // Return response
    res.status(201).json(createResult);
  } catch (error) {
    // Forward to express error handler
    next(error);
  }
};

export const getRecipes = async (req, res, next) => {
  try {
    const findResult = await RecipeModel.find({});
    res.status(200).json(findResult);
  } catch (error) {
    next(error);
  }
};

export const getRecipe = async (req, res, next) => {
    try {
        const id = req.params.id;
        const findByIdResult = await RecipeModel.findById(id);
        if (findByIdResult === null) {
           return res.status(404).json({
                message: `Recipe with ObjectId: ${req.params.id} Not Found!`
            });
        }
        res.status(200).json(findByIdResult); 
    } catch (error) {
        next(error);
    }
};

export const updateRecipe = (req, res) => {
  res.send("Update single recipe");
};

export const deleteRecipe = (req, res) => {
  res.send("Delete a single recipe");
};
