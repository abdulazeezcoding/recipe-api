import { RecipeModel } from "../models/recipe.js";

export const addRecipe = async (req, res, next) => {
  try {
    // Add Recipe to the database
    const createResult = await RecipeModel.create(req.body);
    // Return response
    res.json({ createResult });
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
        const id = req.params._id;
        const findByIdResult = await RecipeModel.findById(id);
        if (findByIdResult === null) {
           return res.status(404).json({
                message: `Recipe with ObjectId: ${req.params._id} Not Found!`
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
