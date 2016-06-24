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
		[ 0, "asc" ]
	]
});

$("#gitClone").tooltipster({
    "content": $("#gitCloneText").detach(),
});

$("#gitAdd").tooltipster({
    "content": $("#gitAddText").detach(),
});

$("#gitAdd2").tooltipster({
    "content": $("#gitAdd2Text").detach(),
});

$("#gitCommit").tooltipster({
    "content": $("#gitCommitText").detach(),
});

$("#gitPush").tooltipster({
    "content": $("#gitPushText").detach(),
});

$("#gitPull").tooltipster({
    "content": $("#gitPullText").detach(),
});