interface SomeType {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

function foobar<T>(url: string): Promise<T> {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Http Error, status: ${response.status}`);
      }
      return response.json();
    })
    .then((data: T) => {
      console.log(data);
      return data;
    });
}

foobar<{ recipes: SomeType[] }>("https://dummyjson.com/recipes").then((data) =>
  console.log(" recipesObj:", data.recipes)
);
