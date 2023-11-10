var electronics = require('../models/electronics');
// List of all electronics
// List of all electronics
exports.electronics_list = async function(req, res) {
    try{
    theelectronics = await electronics.find();
    res.send(theelectronics);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle electronics create on POST.
exports.electronics_create_post = async function(req, res) {
console.log(req.body)
let document = new electronics();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"electronics_type":"goat", "cost":12, "size":"large"}
document.type = req.body.type;
document.Manufacturer = req.body.Manufacturer;
document.cost = req.body.cost;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

    
    // VIEWS
// Handle a show all view
exports.electronics_view_all_Page = async function(req, res) {
    try{
    electronics = await electronics.find();
    res.render('electronics', { title: 'electronics Search Results', results: electronics });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
    


// for a specific electronics.

// for a specific eletronics.
// exports.eletronics_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: eletronicsdetail: ' + req.params.id);
// };
// for a specific eletronics.
exports.eletronics_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await eletronics.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    }
// Handle electronics create on POST.
// exports.electronics_create_post = function(req, res) {
// res.send('NOT IMPLEMENTED: electronics create POST');
// };
// Handle electronics delete form on DELETE.
 exports.electronics_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: electronics delete DELETE ' + req.params.id);
 };
// Handle electronics update form on PUT.
exports.electronics_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: electronics update PUT' + req.params.id);
};