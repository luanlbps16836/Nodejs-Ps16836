const caterogyModel = require('./model');

/**
 * 1
 * descriptionL lấy danh sách danh mục
 * author: VTN
 * date: 29/03/2022 14:07
 */
 exports.getCategories = async () =>{
    // return data;
    // select id, name from categories

    return await caterogyModel.find({});
}

/**
 * 2
*  description: lấy danh mục theo Id
*/
exports.getCategoryById = async (id) => {

  return caterogyModel.findById(id);
};

/**
 * 3
 * thêm mới danh mục vào db
 */
 exports.insert = async (caterogy) => {
  // data.push(product);

  const p = new caterogyModel(caterogy);
  await p.save();
}

// Cập nhật danh muc
// 4
exports.update = async (id, category) => {

  await caterogyModel.findByIdAndUpdate(id, category);
}

/**
 * 5
 * xóa danh muc
 */
 exports.delete = async (id) => {
  await caterogyModel.findByIdAndDelete(id);

}

var data = [
  {
    _id: 1,
    name: "Appetiser - Bought",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  },
  {
    _id: 2,
    name: "Soup - Campbells, Cream Of",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    _id: 3,
    name: "Puree - Kiwi",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  },
  {
    _id: 4,
    name: "Spice - Montreal Steak Spice",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    _id: 5,
    name: "Maple Syrup",
    description: "Fusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    _id: 6,
    name: "Wine - Red, Antinori Santa",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  },
  {
    _id: 7,
    name: "Soup - Campbells Pasta Fagioli",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  },
  {
    _id: 8,
    name: "Bread - Multigrain Oval",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  },
  {
    _id: 9,
    name: "Wine - Riesling Dr. Pauly",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  },
  {
    _id: 10,
    name: "Sauerkraut",
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  },
];
