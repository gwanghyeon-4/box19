import Tools from "../model/Tools";
import test from "../model/Tools";

const homeController = (req, res) => {
    res.render("screens/home");
};
const toolsController = async (req, res) => {
    const ToolsList = await Tools.find({}, {});

    console.log(ToolsList);

    res.render("screens/tools", { ToolsList });
};
const globalController = {
    homeController,
    toolsController,
};

export default globalController;