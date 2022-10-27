const { UserList, ListaVacaciones } = require("../dataBase");
const _ = require("lodash");

const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },
    vacaciones() {
      return ListaVacaciones;
    },
    vacacion: (parent, args) => {
      const location = args.location;
      const vacacion = _.find(ListaVacaciones, { location });
      return vacacion;
    },
  },
  User: {
    visitando: () => {
      return ListaVacaciones
    },
  },
};

module.exports = { resolvers };
