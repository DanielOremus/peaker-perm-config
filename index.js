export const getServerPermissionsConfig = (schemaType) => ({
  products: {
    type: schemaType,
    default: {
      create: false,
      read: true,
      update: false,
      delete: false,
    },
  },
  roles: {
    type: schemaType,
    default: {
      create: false,
      read: false,
      update: false,
      delete: false,
    },
  },
  users: {
    type: schemaType,
    default: {
      create: false,
      read: false,
      update: false,
      delete: false,
    },
  },
})

export const clientPermissionsConfig = {
  products: ["create", "read", "update", "delete"],
  roles: ["create", "read", "update", "delete"],
  users: ["create", "read", "update", "delete"],
}
