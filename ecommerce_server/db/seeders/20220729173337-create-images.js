'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let images = [
      {id:1,uri:'https://image.shutterstock.com/image-photo/4k-monitor-isolated-on-white-260nw-357968483.jpg'},
      {id:2,uri:'https://www.lg.com/co/images/lavadoras-y-secadoras/md07537166/gallery/D02.jpg'},
      {id:3,uri:'https://www.lg.com/co/images/lavadoras-y-secadoras/md07539915/gallery/D-01.jpg'},
      {id:4,uri:'https://image.shutterstock.com/image-photo/jeans-on-background-blue-lie-260nw-1189112893.jpg'},
      {id:5,uri:'https://www.homeelementsweb.com/wp-content/uploads/2021/02/arrocera1gris-600x600.jpg'},
      {id:6,uri:'https://media.aws.alkomprar.com/ymarketingcolcomercio/Alkosto/pequenos-electrodomesticos/contenido/black_and%20_decker/050875826809/800-x-800-presentacion.jpg'},
    ]

    await queryInterface.bulkInsert('images', images, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
