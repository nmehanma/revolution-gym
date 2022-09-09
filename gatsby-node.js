// exports.createSchemaCustomization = ({ actions }) => {
//   const { createFieldExtension, createTypes } = actions
//   createFieldExtension({
//     name: `defaultArray`,
//     extend() {
//       return {
//         resolve(source, args, context, info) {
//           if (source[info.fieldName] == null) {
//             return []
//           }
//           return source[info.fieldName]
//         },
//       }
//     },
//   })
//   const typeDefs = `
//   type site implements Node {
//    siteMetadata: siteMetadata
//   }

//   type siteMetadata {
//     menuLinks: [MenuLinks]
//   }

//   type MenuLinks {
//     title: String
//     url: String
//     subMenu: [SubMenu] @defaultArray
//   }

//   type SubMenu{
//     title: String!
//     url: String!
//   }
//   `
//   createTypes(typeDefs)
// }
