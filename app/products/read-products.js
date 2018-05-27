$(document).ready(function(){
 
    // show list of product on first load
	//window.alert(5 + 6);
	//Console.log("Ready");
	//document.write("HEllo");
    showProducts();
	// when a 'read products' button was clicked
	$(document).on('click', '.read-products-button', function(){
    showProducts();
	});
 
});
 
// function to show list of products
/*function showProducts(){
 
    // get list of products from the API
    $.getJSON("http://localhost/Web%20service/api/product/read.php", function(data){
 
        // html for listing products
        readProductsTemplate(data, "");
 
        // chage page title
        changePageTitle("Read Products");
 
    });
}*/
 
function showProducts(){
	// get list of products from the API
	//Console.log("I'm here")
	//window.alert(5 + 6);
	//document.write("in show products");
	$.getJSON("http://localhost/Web%20service/api/product/read.php", function(data){
		//Console.log("I'm here1")
		//html for listing products
		//document.write("After reading JSON");
		//window.alert(5+6);
		var read_products_html="";
	 
		// when clicked, it will load the create product form
		read_products_html+="<div id='create-product' class='btn btn-primary pull-right m-b-15px create-product-button'>";
		read_products_html+="<span class='glyphicon glyphicon-plus'></span> Create Product";
		read_products_html+="</div>";
		// start table
		read_products_html+="<table class='table table-bordered table-hover'>";
	 
		// creating our table heading
		read_products_html+="<tr>";
			read_products_html+="<th class='w-25-pct'>Name</th>";
			read_products_html+="<th class='w-10-pct'>Price</th>";
			read_products_html+="<th class='w-15-pct'>Category</th>";
			read_products_html+="<th class='w-25-pct text-align-center'>Action</th>";
		read_products_html+="</tr>";
     
		// loop through returned list of data
		$.each(data.records, function(key, val) {
			// creating new table row per record
			read_products_html+="<tr>";
				read_products_html+="<td>" + val.name + "</td>";
				read_products_html+="<td>&#8377;" + val.price + "</td>";
				read_products_html+="<td>" + val.category_name + "</td>";
				// 'action' buttons
				read_products_html+="<td>";
				// read one product button
				read_products_html+="<button class='btn btn-primary m-r-10px read-one-product-button' data-id='" + val.id + "'>";
				read_products_html+="<span class='glyphicon glyphicon-eye-open'></span> Read";
				read_products_html+="</button>";
				// edit button
				read_products_html+="<button class='btn btn-info m-r-10px update-product-button' data-id='" + val.id + "'>";
				read_products_html+="<span class='glyphicon glyphicon-edit'></span> Edit";
				read_products_html+="</button>";
				// delete button
				read_products_html+="<button class='btn btn-danger delete-product-button' data-id='" + val.id + "'>";
				read_products_html+="<span class='glyphicon glyphicon-remove'></span> Delete";
				read_products_html+="</button>";
				read_products_html+="</td>";
			read_products_html+="</tr>";
		});
 
		// end table
		read_products_html+="</table>";
		// inject to 'page-content' of our app
		$("#page-content").html(read_products_html);
		// change page title
		changePageTitle("Read Products");
	});
}