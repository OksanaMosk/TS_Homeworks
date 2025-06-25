type UserType44 = string | number | boolean;

function openUsers(users: UserType44[]): void {
  for (const user of users) {
    console.log(user);
  }
}
