module.exports = {
  getProducts: (req, res) => {
    const db = req.app.get("db");
    db.read_products().then(result => {
      res.status(200).send(result);
    });
  },
  postProduct: (req, res) => {
    const db = req.app.get("db");
    const { name, price, img } = req.body;
    db.create_product([name, price, img]).then(product =>
      res.status(200).send(product)
    );
  },
  deleteProduct: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_product(id).then(product => res.status(200).send(product));
  },
  updateProduct: (req, res) => {
    const db = req.app.get("db")
    const { id } = req.params
    const { name, price, img } = req.body
    console.log([name, price, img, id])
    db.update_product([name, price, img, id]).then(product =>
      res.status(200).send(product)
    )
  },
  getProduct: (req,res) => {
    const db = req.app.get('db')
    const {id} =req.params
    db.get_product(id).then(result => {
      res.status(200).send(result)
    })
  }
};
