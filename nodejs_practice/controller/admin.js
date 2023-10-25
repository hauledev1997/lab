const Product = require('../model/Product-other');

exports.getName = (req, res, next) => {
  // req.session.name = 'hau';
  Product.create({
    name: 'hu',
  });

  res.render('add-name', {
    pageTitle: 'HauLe',
  });
};
// exports.getDetail = (req, res, next) => {
//   console.log(req.params.id);
//   req.session.destroy();
//   res.render('detail', {
//     pageTitle: 'Detail',
//   });
// };
