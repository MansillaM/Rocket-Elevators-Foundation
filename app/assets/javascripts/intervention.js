$(document).ready(function() {

    hideAll();

    function hideAll() {
    $("#intervention_building_select").hide();
    $("#intervention_batterie_id").hide();
    $("#intervention_column_id").hide();
    $("#intervention_elevator_id").hide();
}
    $("#intervention_customer_select").change(function () {
        let selectedCustomerId = $(this).val();

        if (selectedCustomerId == selectedCustomerId) {
            getCustomerBuildings(selectedCustomerId);
        }

        let selectedBuildingId = $(this).val();

        if (selectedBuildingId == selectedBuildingId) {
            getBuildingBattery(selectedBuildingId);
        }

        let selectedBatteryId = $(this).val();

        if (selectedBatteryId == selectedBatteryId) {
            getBatteryColumn(selectedBatteryId);
        }

        let selectedColumnId = $(this).val();

        if (selectedColumnId == selectedColumnId) {
            getColumnElevator(selectedColumnId)
        }
    })

    

})



function getCustomerBuildings(customerId) {
    $.ajax({
        url: "/interventions/customer_buildings",
        type: "get",
        data: {
            customer_id: customerId
        },
        dataType: "json",
        success: function (building) {
            let building_select = $("#intervention_building_select")
            building_select.empty()
            building_select.show()
            building_select.append("<option value=" + '0' + ">" + 'NONE' + "</option>")
            $.each(building, function () {
                // building_select.append("<option value=" + '0' + ">" + 'NONE' + "</option>")
                building_select.append("<option value=" + building[0].id + ">" + building[0].address_id + "</option>")
            })
        },
        error: function (data) {
            alert("Error!")
        }
    })
}

function getBuildingBattery(buildingId) {
    $.ajax({
        url: "/interventions/building_batteries",
        type: "get",
        data: {
            building_id: buildingId
        },
        dataType: "json",
        success: function (batterie) {
            let battery_select = $("#intervention_batterie_id")
            battery_select.empty()
            battery_select.show()
            battery_select.append("<option value=" + '0' + ">" + 'NONE' + "</option>")
            $.each(batterie, function () {
                // battery_select.append("<option value=" + '0' + ">" + 'NONE' + "</option>")
                battery_select.append("<option value=" + batterie[0].buildling_id + ">" + batterie[0].id + "</option>")
            })
        },
        error: function (data) {
            alert("Error!")
        }
    })
}

function getBatteryColumn(batteryId) {
    $.ajax({
        url: "/interventions/batterie_columns",
        type: "get",
        data: {
            battery_id: batteryId
        },
        dataType: "json",
        success: function (column) {
            let column_select = $("#intervention_column_id")
            column_select.empty()
            column_select.show()
            column_select.append("<option value=" + '0' + ">" + 'NONE' + "</option>")
            $.each(column, function () {
                // column_select.append("<option value=" + '0' + ">" + 'NONE' + "</option>")
                column_select.append("<option value=" + column[0].battery_id + ">" + column[0].id + "</option>")
            })
        },
        error: function (data) {
            alert("Error!")
        }
    })
}

function getColumnElevator(columnId) {
    $.ajax({
        url: "/interventions/column_elevators",
        type: "get",
        data: {
            column_id: columnId
        },
        dataType: "json",
        success: function (elevator) {
            let elevator_select = $("#intervention_elevator_id")
            elevator_select.empty()
            elevator_select.show()
            elevator_select.append("<option value=" + '0' + ">" + 'NONE' + "</option>")
            console.log("### looping batteries")
            $.each(elevator, function () {
                console.log(elevator)
                // elevator_select.append("<option value=" + '0' + ">" + 'NONE' + "</option>")
                elevator_select.append("<option value=" + elevator[0].column_id + ">" + elevator[0].id + "</option>")
            })
            console.log("### donedeal")
        },
        error: function (data) {
            alert("Error!")
        }
    })
}

// function getElevator(elevatorId) {
//     $.ajax({
//         url: "/interventions/column_elevators",
//         type: "get",
//         data: {
//             elevator_id: elevatorId
//         },
//         dataType: "json",
//         success: function (elevator) {
//             let elevator_select = $("#intervention_elevator_id")
//             elevator_select.empty()
//             elevator_select.show()
//             console.log("### looping batteries")
//             $.each(elevator, function () {
//                 console.log(elevator)
//                 elevator_select.append("<option value=" + '0' + ">" + 'NONE' + "</option>")
//                 elevator_select.append("<option value=" + elevator[0].column_id + ">" + elevator[0].id + "</option>")
//             })
//             console.log("### donedeal")
//         },
//         error: function (data) {
//             alert("Error!")
//         }
//     })
// }