const mongoose = require("mongoose");
const { microBlog } = require("../models");
require("dotenv").config();

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/" + process.env.DB_NAME,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    }
);

const microBlogSeed = [
    {
        createdAt: new Date(new Date().setDate(new Date().getDate() - 5)),
        microBlogs: [
            {
                title: "Where can I get some?",
                body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
                author: "Mario",
            },
        ],
    },
    {
        createdAt: new Date(new Date().setDate(new Date().getDate() - 4)),
        microBlogs: [
            {
                title: "Where does it come from?",
                body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
                author: "Mario",
            },
        ],
    },
    {
        createdAt: new Date(new Date().setDate(new Date().getDate() - 3)),
        microBlogs: [
            {
                title: "What is Lorem Ipsum?",
                body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                author: "Yoshi",
            },
        ],
    },
    {
        createdAt: new Date(new Date().setDate(new Date().getDate() - 2)),
        microBlogs: [
            {
                title: "The standard Lorem Ipsum passage, used since the 1500s",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                author: "Mario",
            },
        ],
    },
    {
        createdAt: new Date(new Date().setDate(new Date().getDate() - 1)),
        microBlogs: [
            {
                title: "Section 1.10.32 of 'de Finibus Bonorum et Malorum', written by Cicero in 45 BC",
                body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
                author: "Yoshi",
            },
        ],
    },
];

microBlog
    .deleteMany({})
    .then(() => microBlog.collection.insertMany(microBlogSeed))
    .then((data) => {
        console.log(data.insertedCount + " records inserted.");
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
