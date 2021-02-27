function nn() {

	var structure = {
	  "date":"date",
	  "areaName":"areaName",
	  "areaCode":"areaCode",
	  "newCasesByPublishDate" : "newCasesByPublishDate",
	  "cumCasesByPublishDate":"cumCasesByPublishDate",
	  "newAdmissions":"newAdmissions",
	  "cumAdmissions":"cumAdmissions",
	  "cumTestsByPublishDate":"cumTestsByPublishDate",
	  "newTestsByPublishDate":"newTestsByPublishDate",
	  "hospitalCases":"hospitalCases",
	  "newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate",
	  "cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate"
	} 

	var payload = JSON.stringify(structure)


//Get ltla data
	var url = 'https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=ltla&structure=' + payload +'&latestBy=newCasesByPublishDate'
	console.log(url)

	var urlEncoded = encodeURI(url);
	var response = UrlFetchApp.fetch(urlEncoded, {'muteHttpExceptions': true})
	var response_data = JSON.parse(response.getContentText())

	var sheet = SpreadsheetApp.getActive().getSheetByName('LocalAuthorityDistrict')
	sheet.clear()

	var temp_arr =[]
	temp_arr.push([	"date",
					"areaName",
					"areaCode",
					"newCasesByPublishDate",
					"cumCasesByPublishDate",
					"newAdmissions",
					"cumAdmissions",
					"cumTestsByPublishDate",
					"newTestsByPublishDate",
			"hospitalCases",
					"newDeaths28DaysByPublishDate",
					"cumDeaths28DaysByPublishDate"
					])

    for (i = 0; i < response_data.data.length; i++) {

		temp_arr.push([
					response_data.data[i].date,
					response_data.data[i].areaName,
					response_data.data[i].areaCode,
					response_data.data[i].newCasesByPublishDate,
					response_data.data[i].cumCasesByPublishDate,
					response_data.data[i].newAdmissions,
					response_data.data[i].cumAdmissions,
					response_data.data[i].cumTestsByPublishDate,
					response_data.data[i].newTestsByPublishDate,
					response_data.data[i].hospitalCases,
					response_data.data[i].newDeaths28DaysByPublishDate,
					response_data.data[i].cumDeaths28DaysByPublishDate
					])
    }
	
	dataRange = sheet.getRange(1, 1, temp_arr.length, 12)
	dataRange.setValues(temp_arr)   
}