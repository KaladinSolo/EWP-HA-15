$("#gitTable").DataTable({
    "ajax" : {
		url: "gitTable.json",
		dataSrc: "gitTable"},
	"columns": [
		{ data: "command" },
		{ data: "example" },
		{ data: "description" }
	],
	"columnDefs": [
        { targets: '_all', className: "dt-center" }
    ],
	"bFilter" : false,               
	"bLengthChange": false,
	"bPaginate": false,
	"order": [
		[ 1, "asc" ]
	]
});

$("#fav").tooltipster({
    "content": $("#content").detach()
});