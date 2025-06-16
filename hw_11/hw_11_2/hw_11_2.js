const divRecipes = document.getElementById("wrap");
const listRecipes = document.createElement("ul");
listRecipes.classList.add("list_recipes");
divRecipes.appendChild(listRecipes);

fetch("https://dummyjson.com/recipes ")
  .then((value) => value.json())
  .then((recipesObj) => {
    // console.log(" recipesObj:", recipesObj);
    const { recipes } = recipesObj;
    // console.log(" resipes:", recipes);

    for (const recipe of recipes) {
      const itemRecipe = document.createElement("li");
      itemRecipe.classList.add("item_recipe");
      listRecipes.appendChild(itemRecipe);

      const divTitle = document.createElement("div");
      divTitle.classList.add("div_title");

      const nameRecipe = document.createElement("h3");
      nameRecipe.classList.add("title");
      nameRecipe.innerText = recipe.name;

      const cuisine = document.createElement("span");
      cuisine.classList.add("cuisine");
      cuisine.innerText = `(${recipe.cuisine})`;

      nameRecipe.appendChild(cuisine);

      const tagsRecipe = recipe.tags;
      const itemsTags = document.createElement("p");
      itemsTags.classList.add("tags");
      itemsTags.innerText = `Tags: ${tagsRecipe.join(", ")}`;

      const divRating = document.createElement("div");
      divRating.classList.add("div_rating");
      const rating = document.createElement("div");
      rating.innerText = `Rating: ${recipe.rating}`;

      const starsContainer = document.createElement("div");
      starsContainer.classList.add("stars_container");

      // зірочки робила не сама...😊
      function renderStars(rating, container) {
        container.innerHTML = "";

        for (let i = 1; i <= 5; i++) {
          const svg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
          );
          svg.setAttribute("width", "20");
          svg.setAttribute("height", "20");
          svg.setAttribute("viewBox", "0 0 24 24");
          svg.setAttribute("fill", "none");

          const path = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
          );
          path.setAttribute(
            "d",
            "M12 .587l3.668 7.568L24 9.75l-6 5.848 1.416 8.582L12 18.897 4.584 24.18 6 15.598 0 9.75l8.332-1.595z"
          );

          const fillAmount = rating - (i - 1);

          if (fillAmount >= 1) {
            path.setAttribute("fill", "gold");
          } else if (fillAmount >= 0.8) {
            path.setAttribute("fill", "url(#fill80)");
          } else if (fillAmount >= 0.5) {
            path.setAttribute("fill", "url(#fill50)");
          } else if (fillAmount >= 0.4) {
            path.setAttribute("fill", "url(#fill40)");
          } else if (fillAmount >= 0.2) {
            path.setAttribute("fill", "url(#fill20)");
          } else {
            path.setAttribute("fill", "lightgray");
          }

          svg.appendChild(path);
          container.appendChild(svg);
        }
      }

      if (!document.getElementById("starGradientDefs")) {
        const defs = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        );
        defs.setAttribute("id", "starGradientDefs");
        defs.innerHTML = `
    <defs>
      <linearGradient id="fill80">
        <stop offset="80%" stop-color="gold"/>
        <stop offset="80%" stop-color="lightgray"/>
      </linearGradient>
      <linearGradient id="fill50">
        <stop offset="50%" stop-color="gold"/>
        <stop offset="50%" stop-color="lightgray"/>
      </linearGradient>
      <linearGradient id="fill40">
        <stop offset="40%" stop-color="gold"/>
        <stop offset="40%" stop-color="lightgray"/>
      </linearGradient>
      <linearGradient id="fill20">
        <stop offset="20%" stop-color="gold"/>
        <stop offset="20%" stop-color="lightgray"/>
      </linearGradient>
    </defs>
  `;
        document.body.appendChild(defs);
      }
      renderStars(+recipe.rating, starsContainer);
      rating.append(starsContainer);

      const review = document.createElement("p");
      review.innerText = `Review: ${recipe.reviewCount}`;
      divRating.append(rating, review);

      divTitle.append(nameRecipe, divRating);

      const divMain = document.createElement("div");
      divMain.classList.add("div_main");

      const imgRecipe = document.createElement("img");
      imgRecipe.src = recipe.image;
      imgRecipe.classList.add("recipe_img");

      const rightBlock = document.createElement("div");
      rightBlock.classList.add("right_block");

      const rightUpBlock = document.createElement("div");
      rightUpBlock.classList.add("rightUp_block");

      const ingredientsBlock = document.createElement("div");
      ingredientsBlock.classList.add("ingredients_block");

      const ingredientsTitle = document.createElement("h4");
      ingredientsTitle.innerText = "Ingredients:";
      ingredientsTitle.classList.add("ingredients_title");

      const ingredientsList = recipe.ingredients;
      const ingrList = document.createElement("ol");

      ingredientsBlock.append(ingredientsTitle, ingrList);

      ingrList.classList.add("ingredients_list");
      for (const ingredient of ingredientsList) {
        const itemIngredient = document.createElement("li");
        itemIngredient.innerText = ingredient;
        ingrList.appendChild(itemIngredient);
      }

      const divTime = document.createElement("div");
      divTime.classList.add("div_time");
      const prepTime = document.createElement("p");
      prepTime.innerText = `Prepare ${recipe.prepTimeMinutes} min`;
      const cookTime = document.createElement("p");
      cookTime.innerText = `Cook ${recipe.cookTimeMinutes} min`;
      const timeImg = document.createElement("img");
      timeImg.src = "./images/timer.png";

      const calor = document.createElement("p");
      calor.innerText = `Calories: ${recipe.caloriesPerServing}`;

      divTime.append(prepTime, cookTime, timeImg, calor);
      rightUpBlock.append(ingredientsBlock, divTime);

      rightUpBlock.append(ingredientsBlock, divTime);

      const instructionsRecipe = recipe.instructions;
      const instruction = document.createElement("p");
      instruction.classList.add("instruction");
      instruction.innerText = `Instruction: ${instructionsRecipe.join(" ")}`;

      const servings = document.createElement("p");
      servings.classList.add("servings");
      servings.innerText = `Servings: ${recipe.servings}`;

      const difficulty = recipe.difficulty;
      const difficultyLevel = document.createElement("p");
      difficultyLevel.classList.add("difficulty");
      difficultyLevel.innerText = `Difficulty level: ${difficulty}`;

      rightBlock.append(rightUpBlock, instruction, servings, difficultyLevel);

      divMain.append(imgRecipe, rightBlock);

      const meal = recipe.mealType;
      const mealTags = document.createElement("p");
      mealTags.classList.add("meal");
      mealTags.innerText = `Meal Category: ${meal.join(", ")}`;

      const divId = document.createElement("div");
      divId.classList.add("div_id");
      const idDiv = document.createElement("div");
      idDiv.innerText = `Recipe ID: ${recipe.id}`;
      const userIdDiv = document.createElement("div");
      userIdDiv.innerText = `User ID: ${recipe.userId}`;
      divId.append(idDiv, userIdDiv);

      const divFooter = document.createElement("div");
      divFooter.classList.add("div_footer");
      divFooter.append(mealTags, divId);

      itemRecipe.append(divTitle, itemsTags, divMain, divFooter);
    }
  });
