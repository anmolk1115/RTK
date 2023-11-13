import Chance from "chance";

const chance = Chance();

const fakeUserData = () => {
    return chance.name({ middle: true });
}
// export const fakeUserData = {
//     data: console.log(chance.name({ middle: true }))
// };

export default fakeUserData;