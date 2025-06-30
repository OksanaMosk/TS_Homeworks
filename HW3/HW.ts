interface ISomeType {
  id: number;
  name: string;
  ingredients: string[];
}

function foobar<T>(url: string): Promise<T> {
    return fetch(url)
    .then((value) => value.json())
    .then((response) => {
        console.log(response);
        return response
    });
}

foobar<ISomeType>("https://dummyjson.com/recipes"){
    .then((recipes) => {
        co
    }

}
