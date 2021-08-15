import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { shallow, mount, render, configure, wrapper } from "enzyme";
import { BatchData } from "./index";
import { Box, FlatList, Text, Image, View } from "native-base";

import * as redux from 'react-redux'

const spy = jest.spyOn(redux, 'useDispatch')
spy.mockReturnValue(jest.fn());
const spySelector = jest.spyOn(redux, 'useSelector')
spySelector.mockReturnValue(jest.fn());


import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("<BatchData />", () => {

  it("rendered as expected when batch not selected and data loaded", () => {
    const dropDownData = ["A","B"];
    const batchData = shallow(
      <BatchData
      itemDetails ={{}}
      dropDownData={dropDownData}
      neutritionData={[]}
      neutritionSummery={[]}
      ingredientsData={[]}
      ingredientsSupplierData={[]}
      legalData={[]}
      selectedItemFeeback={[]}
      onBatchSelect={jest.fn()}
      selectedItemRating={0}
      isBatchSelected={false}
      itemDataIsLoading={true}


      />
    );

    
    expect(batchData.props().width).toBe("100%");
    expect(batchData.props().rounded).toBe("md");
    expect(batchData.props().px).toBe(2);
    expect(batchData.props().shadow).toBe(3);
    expect(batchData.props().children[0].props.accessibilityLabel).toBe("Select batch");
    expect(batchData.props().children[0].props.placeholder).toBe("Select batch");

    expect(batchData.props().children[0].props.children[0].props.label).toBe("Select item");
    expect(batchData.props().children[0].props.children[0].props.value).toBe("NoValue");

    expect(batchData.props().children[0].props.children[1][0].props.label).toBe(dropDownData[0]);
    expect(batchData.props().children[0].props.children[1][0].props.value).toBe(dropDownData[0]);

    expect(batchData.props().children[0].props.children[1][1].props.label).toBe(dropDownData[1]);
    expect(batchData.props().children[0].props.children[1][1].props.value).toBe(dropDownData[1]);
    

  });

  it("rendered as expected when batch not selected and data not loaded", () => {
    const dropDownData = [];
    const batchData = shallow(
      <BatchData
      itemDetails ={{}}
      dropDownData={dropDownData}
      neutritionData={[]}
      neutritionSummery={[]}
      ingredientsData={[]}
      ingredientsSupplierData={[]}
      legalData={[]}
      selectedItemFeeback={[]}
      onBatchSelect={jest.fn()}
      selectedItemRating={0}
      isBatchSelected={false}
      itemDataIsLoading={false}


      />
    );

    expect(batchData.props().width).toBe("100%");
    expect(batchData.props().rounded).toBe("md");
    expect(batchData.props().px).toBe(2);
    expect(batchData.props().shadow).toBe(3);
    expect(batchData.props().children[0].props.accessibilityLabel).toBe("Select batch");
    expect(batchData.props().children[0].props.placeholder).toBe("Select batch");

    expect(batchData.props().children[0].props.children[0].props.label).toBe("Select item");
    expect(batchData.props().children[0].props.children[0].props.value).toBe("NoValue");

    expect(batchData.props().children[1].props.children[0].props.children[0].props.children[0].props.children[2]).toBe("Neutritions");
    expect(batchData.props().children[1].props.children[0].props.children[0].props.children[0].props.children[0].props.as.props.name).toBe("md-fitness");
    expect(batchData.props().children[1].props.children[0].props.children[1].props.children[1].props.children.props.children[1].props.alertMessageKey).toBe("NeutritionsSelectBatch");
    
    
    expect(batchData.props().children[1].props.children[1].props.children[0].props.children[0].props.children[2]).toBe("Ingredients");
    expect(batchData.props().children[1].props.children[1].props.children[0].props.children[0].props.children[0].props.as.props.name).toBe("md-fast-food-sharp");
    expect(batchData.props().children[1].props.children[1].props.children[1].props.children.props.children.props.children[1].props.alertMessageKey).toBe("IngredientsSelectBatch");


    expect(batchData.props().children[1].props.children[2].props.children[0].props.children[0].props.children[2]).toBe("Suppliers");
    expect(batchData.props().children[1].props.children[2].props.children[0].props.children[0].props.children[0].props.as.props.name).toBe("md-infinite");
    expect(batchData.props().children[1].props.children[2].props.children[1].props.children.props.children.props.children[1].props.alertMessageKey).toBe("SuppliersSelectBatch");
    
    
    expect(batchData.props().children[1].props.children[3].props.children[0].props.children[0].props.children[2]).toBe("Legal aspect");
    expect(batchData.props().children[1].props.children[3].props.children[0].props.children[0].props.children[0].props.as.props.name).toBe("md-briefcase");
    expect(batchData.props().children[1].props.children[3].props.children[1].props.children.props.children[1].props.alertMessageKey).toBe("NoLegalData");

    expect(batchData.props().children[1].props.children[4].props.children[0].props.children[0].props.children[0].props.children[2]).toBe("User feedback");
    expect(batchData.props().children[1].props.children[4].props.children[0].props.children[0].props.children[0].props.children[0].props.as.props.name).toBe("md-chatbubble-ellipses");
    expect(batchData.props().children[1].props.children[4].props.children[0].props.children[0].props.children[1].props.children).toBe("N/A");
    expect(batchData.props().children[1].props.children[4].props.children[0].props.children[0].props.children[1].props.colorScheme).toBe("info");
    expect(batchData.props().children[1].props.children[4].props.children[1].props.children.props.children[1].props.alertMessageKey).toBe("NoFeedbackData");
    expect(batchData.props().children[1].props.children[4].props.children[0].props.children[0].props.children[2].props.icon.props.as.props.name).toBe("comment-edit-outline");

  });

  it("rendered as expected when batch is selected and data not loaded", () => {
    const dropDownData = [
		"2222",
		"3333"
	];
    const itemData = {
		"barcode": "12345678980",
		"batches": [
			{
				"batchID": "2222",
				"ingredients": {
					"ingredientsList": [
						{
							"company": "ABC",
							"id": "A1",
							"name": "Tree",
							"refLink": "https://itemcontatstest.com/Tree"
						},
						{
							"company": "PQR",
							"id": "A1",
							"name": "Water",
							"refLink": "https://itemcontatstest.com/Water"
						}
					]
				},
				"neutritions": {
					"neutritionData": [
						{
							"colour": "#FFB740",
							"name": "protein",
							"value": "1.2mg"
						},
						{
							"colour": "#66DE93",
							"name": "carbo",
							"value": "10mg"
						}
					],
					"summery": "Per serving"
				},
				"supplier": [
					{
						"country": "SL",
						"name": "ABC cocnut pvt Ltd"
					},
					{
						"country": "SL",
						"name": "PQR cocnut pvt Ltd"
					}
				]
			},
			{
				"batchID": "3333",
				"ingredients": {
					"ingredientsList": [
						{
							"company": "ABC",
							"id": "A1",
							"name": "Tree",
							"refLink": "https://itemcontatstest.com/Tree"
						},
						{
							"company": "PQR",
							"id": "A1",
							"name": "Water",
							"refLink": "https://itemcontatstest.com/Water"
						}
					]
				},
				"neutritions": {
					"neutritionData": [
						{
							"colour": "#D83A56",
							"name": "protein",
							"value": "1.5mg"
						},
						{
							"colour": "#66DE93",
							"name": "carbo",
							"value": "1mg"
						}
					],
					"summery": "Per serving 100g"
				},
				"supplier": [
					{
						"country": "SL",
						"name": "LMN cocnut pvt Ltd"
					},
					{
						"country": "SL",
						"name": "XYZ cocnut pvt Ltd"
					},
					{
						"country": "SL",
						"name": "XYZ cocnut pvt Ltd"
					}
				]
			}
		],
		"brand": "AppleBrnd1",
		"company": "Apple Company A",
		"country": "SL",
		"feedback": {
			"feedbackData": [
				{
					"comment": "This is dummy data.",
					"date": "2021-08-16"
				},
				{
					"comment": "This is dummy data.",
					"date": "2021-08-15"
				}
			],
			"overallRating": 10.9
		},
		"id": "1",
		"imageURL": "http://192.168.14.75:5000/images?img=apple.jpeg",
		"legal": [
			{
				"Link": "http://lawauthworl.cm/12345678",
				"date": "2021-08-16",
				"description": "This is dummy data."
			},
			{
				"Link": "http://lawauthworl.cm/12345678",
				"date": "2021-08-15",
				"description": "This is dummy data."
			}
		],
		"productName": "Apple"
	}
    const neutritionData = [
		{
			"colour": "#FFB740",
			"name": "protein",
			"value": "1.2mg"
		},
		{
			"colour": "#66DE93",
			"name": "carbo",
			"value": "10mg"
		}
	]
    const neutritionSummery = "Per serving";

    const ingredientsData =  [
		{
			"company": "ABC",
			"id": "A1",
			"name": "Tree",
			"refLink": "https://itemcontatstest.com/Tree"
		},
		{
			"company": "PQR",
			"id": "A1",
			"name": "Water",
			"refLink": "https://itemcontatstest.com/Water"
		}
	]
    const ingredientsSupplierData = [
		{
			"country": "SL",
			"name": "ABC cocnut pvt Ltd"
		},
		{
			"country": "SL",
			"name": "PQR cocnut pvt Ltd"
		}
	]
    const legalData = [
		{
			"Link": "http://lawauthworl.cm/12345678",
			"date": "2021-08-16",
			"description": "This is dummy data."
		},
		{
			"Link": "http://lawauthworl.cm/12345678",
			"date": "2021-08-15",
			"description": "This is dummy data."
		}
	]
    const selectedItemFeeback = [
		{
			"comment": "This is dummy data.",
			"date": "2021-08-16"
		},
		{
			"comment": "This is dummy data.",
			"date": "2021-08-15"
		}
	]
    const selectedItemRating  = 10.9;
    const isBatchSelected = true;
    const batchData = shallow(
      <BatchData
      itemDetails ={itemData}
      dropDownData={dropDownData}
      neutritionData={neutritionData}
      neutritionSummery={neutritionSummery}
      ingredientsData={ingredientsData}
      ingredientsSupplierData={ingredientsSupplierData}
      legalData={legalData}
      selectedItemFeeback={selectedItemFeeback}
      onBatchSelect={jest.fn()}
      selectedItemRating={0}
      isBatchSelected={true}
      itemDataIsLoading={false}
      />
    );


    expect(batchData.props().width).toBe("100%");
    expect(batchData.props().rounded).toBe("md");
    expect(batchData.props().px).toBe(2);
    expect(batchData.props().shadow).toBe(3);
    expect(batchData.props().children[0].props.accessibilityLabel).toBe("Select batch");
    expect(batchData.props().children[0].props.placeholder).toBe("Select batch");

    expect(batchData.props().children[0].props.children[0].props.label).toBe("Select item");
    expect(batchData.props().children[0].props.children[0].props.value).toBe("NoValue");

    expect(batchData.props().children[0].props.children[1][1].props.label).toBe("3333");

    expect(batchData.props().children[1].props.children[0].props.children[0].props.children[0].props.children[2]).toBe("Neutritions");
    expect(batchData.props().children[1].props.children[0].props.children[0].props.children[0].props.children[0].props.as.props.name).toBe("md-fitness");
    expect(batchData.props().children[1].props.children[0].props.children[1].props.children[0].props.children).toBe(neutritionSummery);
    expect(batchData.props().children[1].props.children[0].props.children[1].props.children[1].props.children.props.children[0][0].props.children[0].props.children).toBe("protein");
    expect(batchData.props().children[1].props.children[0].props.children[1].props.children[1].props.children.props.children[0][0].props.children[1]).toBe("1.2mg ");
    
    
    expect(batchData.props().children[1].props.children[1].props.children[0].props.children[0].props.children[2]).toBe("Ingredients");
    expect(batchData.props().children[1].props.children[1].props.children[0].props.children[0].props.children[0].props.as.props.name).toBe("md-fast-food-sharp");
    //expect(batchData.props().children[1].props.children[1].props.children[1].props.children.props.children.props.children[1].props.children[1].props.children).toBe("Select Batch to view the ingredients data.");


    expect(batchData.props().children[1].props.children[2].props.children[0].props.children[0].props.children[2]).toBe("Suppliers");
    expect(batchData.props().children[1].props.children[2].props.children[0].props.children[0].props.children[0].props.as.props.name).toBe("md-infinite");
    //expect(batchData.props().children[1].props.children[2].props.children[1].props.children.props.children.props.children[1].props.children[1].props.children).toBe("Select Batch to view the supplier data.");
    
    
    expect(batchData.props().children[1].props.children[3].props.children[0].props.children[0].props.children[2]).toBe("Legal aspect");
    expect(batchData.props().children[1].props.children[3].props.children[0].props.children[0].props.children[0].props.as.props.name).toBe("md-briefcase");
    //expect(batchData.props().children[1].props.children[3].props.children[1].props.children.props.children[1].props.children[1].props.children).toBe("There is no legal data available for this product.");

    expect(batchData.props().children[1].props.children[4].props.children[0].props.children[0].props.children[0].props.children[2]).toBe("User feedback");
    expect(batchData.props().children[1].props.children[4].props.children[0].props.children[0].props.children[0].props.children[0].props.as.props.name).toBe("md-chatbubble-ellipses");
    expect(batchData.props().children[1].props.children[4].props.children[0].props.children[0].props.children[1].props.children).toBe("N/A");
    expect(batchData.props().children[1].props.children[4].props.children[0].props.children[0].props.children[1].props.colorScheme).toBe("info");
    //expect(batchData.props().children[1].props.children[4].props.children[1].props.children.props.children[1].props.children[1].props.children).toBe("There is no feedback data available for this product.");
    //expect(batchData.props().children[1].props.children[4].props.children[0].props.children[0].props.children[2].props.icon.props.as.props.name).toBe("comment-edit-outline");

  });

});
