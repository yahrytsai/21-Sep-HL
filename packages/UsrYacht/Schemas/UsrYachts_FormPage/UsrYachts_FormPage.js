define("UsrYachts_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYachts"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "8d96f0b8-5cb0-410d-a66d-e46a0f9fdcc5",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_Actions",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_Actions_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_wgf44hj",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_wgf44hj_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrYachtAvgTickPrice",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "YachtId"
						}
					}
				},
				"parentName": "Button_Actions",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_YachtService",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_YachtService_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceRequest"
					}
				},
				"parentName": "Button_Actions",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MenuItem_53wnpn1",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_53wnpn1_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCreateYachtRentals",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "YachtId"
						}
					}
				},
				"parentName": "Button_Actions",
				"propertyName": "menuItems",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "copilot-rewrite-friendly-icon",
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_xirzusw",
					"control": "$PDS_UsrPrice_xirzusw",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Image",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 2
					},
					"type": "crt.ImageInput",
					"label": "$Resources.Strings.PDS_UsrImage_6mfxc0n",
					"value": "$PDS_UsrImage_6mfxc0n",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"size": "large",
					"borderRadius": "medium",
					"positioning": "cover"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "YachtNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrYachtNumber_ihh67e2",
					"control": "$PDS_UsrYachtNumber_ihh67e2",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TicketPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTicketPrice_2uwrw0x",
					"control": "$PDS_UsrTicketPrice_2uwrw0x",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "CaptainEmail",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 7,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.PDS_UsrCaptainEmail_piyext2",
					"control": "$PDS_UsrCaptainEmail_piyext2",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(CaptainEmail_caption)#",
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Length",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrLength_kthaf7w",
					"control": "$PDS_UsrLength_kthaf7w",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Captain",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCaptain_owk2zwu",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCaptain_owk2zwu",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_i2xdh68",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_i2xdh68_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Captain",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CrewCount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCrewCount_ffg2ir1",
					"control": "$PDS_UsrCrewCount_ffg2ir1",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DriveType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType_tyl0ju2",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrDriveType_tyl0ju2",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null,
					"secondaryDisplayValue": "Description"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "PassengerCount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassengerCount_k8utt4f",
					"control": "$PDS_UsrPassengerCount_k8utt4f",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Status",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_uq1tm04",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrStatus_uq1tm04",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": "$Status_ValueDetails"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_8ehzo5o",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_8ehzo5o_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Status",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_enczraw",
					"control": "$PDS_UsrComment_enczraw",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": true,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_ww5z5x4",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrManager_ww5z5x4",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Categories",
				"values": {
					"type": "crt.MultiSelect",
					"label": "#ResourceString(Categories_label)#",
					"recordId": "$Id",
					"recordRelationColumnName": "UsrYacht",
					"selectSchemaName": "UsrCategoryInYacht",
					"selectColumnName": "UsrCategory",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"required": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_1mlqx5r",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch",
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_04dtsju",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_04dtsju_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_1mlqx5r",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_95wo1ku",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_04dtsju",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_piwhgit",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_95wo1ku",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_qrulxdo",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_qrulxdo_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrYachtRentals",
							"defaultValues": [
								{
									"attributeName": "UsrYacht",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_piwhgit",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_4014jdm",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_4014jdm_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_56rrlioDS"
						}
					}
				},
				"parentName": "FlexContainer_piwhgit",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_bmrctwj",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_bmrctwj_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_piwhgit",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_0gv3rum",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_0gv3rum_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_56rrlio"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_bmrctwj",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_gs3wzzv",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_gs3wzzv_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachtRentals"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_bmrctwj",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_br500o7",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_br500o7_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_br500o7_GridDetail_56rrlio",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_56rrlio"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_br500o7_SearchValue",
							"GridDetailSearchFilter_br500o7_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_piwhgit",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_w3q17xi",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_04dtsju",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_56rrlio",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_56rrlio",
					"primaryColumnName": "GridDetail_56rrlioDS_Id",
					"columns": [
						{
							"id": "799a2911-162e-fe39-1f13-75a8a1f1c627",
							"code": "GridDetail_56rrlioDS_UsrRentalStart",
							"caption": "#ResourceString(GridDetail_56rrlioDS_UsrRentalStart)#",
							"dataValueType": 7,
							"width": 143
						},
						{
							"id": "4f380d7d-618b-0046-bb60-e0a570979827",
							"code": "GridDetail_56rrlioDS_UsrRentalEnd",
							"caption": "#ResourceString(GridDetail_56rrlioDS_UsrRentalEnd)#",
							"dataValueType": 7,
							"width": 127
						},
						{
							"id": "228614ca-73c8-3d25-cee2-2d71b4fb18cc",
							"code": "GridDetail_56rrlioDS_UsrCustomer",
							"caption": "#ResourceString(GridDetail_56rrlioDS_UsrCustomer)#",
							"dataValueType": 10,
							"width": 122
						},
						{
							"id": "7e6035e5-87f8-2663-8ef1-0b161296fc50",
							"code": "GridDetail_56rrlioDS_UsrManager",
							"caption": "#ResourceString(GridDetail_56rrlioDS_UsrManager)#",
							"dataValueType": 10,
							"width": 126
						},
						{
							"id": "dbea53dc-b1a5-b578-3178-228be4baacea",
							"code": "GridDetail_56rrlioDS_UsrTotalPrice",
							"caption": "#ResourceString(GridDetail_56rrlioDS_UsrTotalPrice)#",
							"dataValueType": 32,
							"width": 128
						},
						{
							"id": "56db09ed-6870-b845-d534-50133e621717",
							"code": "GridDetail_56rrlioDS_UsrComment",
							"caption": "#ResourceString(GridDetail_56rrlioDS_UsrComment)#",
							"dataValueType": 27,
							"width": 129
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_w3q17xi",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrLength_kthaf7w": {
						"modelConfig": {
							"path": "PDS.UsrLength"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.YTValidator",
								"params": {
									"settingCode": "UsrYachtMaxLength",
									"message": "#ResourceString(LengthCannotBeMore)#"
								}
							}
						}
					},
					"PDS_UsrPrice_xirzusw": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.YTValidator",
								"params": {
									"settingCode": "UsrYachtMaxPrice",
									"message": "#ResourceString(PriceCannotBeMore)#"
								}
							}
						}
					},
					"PDS_UsrCaptain_owk2zwu": {
						"modelConfig": {
							"path": "PDS.UsrCaptain"
						}
					},
					"PDS_UsrCaptain_owk2zwu_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrCrewCount_ffg2ir1": {
						"modelConfig": {
							"path": "PDS.UsrCrewCount"
						}
					},
					"PDS_UsrPassengerCount_k8utt4f": {
						"modelConfig": {
							"path": "PDS.UsrPassengerCount"
						}
					},
					"PDS_UsrDriveType_tyl0ju2": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrDriveType_tyl0ju2_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrStatus_uq1tm04": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrStatus_uq1tm04_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrManager_ww5z5x4": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrManager_ww5z5x4_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrComment_enczraw": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrImage_6mfxc0n": {
						"modelConfig": {
							"path": "PDS.UsrImage"
						}
					},
					"Status_ValueDetails": {
						"modelConfig": {
							"path": "PDS.UsrStatusDescription"
						}
					},
					"PDS_UsrYachtNumber_ihh67e2": {
						"modelConfig": {
							"path": "PDS.UsrYachtNumber"
						}
					},
					"Categories_List_Items_Predefined_Filter": {
						"value": null
					},
					"PDS_UsrTicketPrice_2uwrw0x": {
						"modelConfig": {
							"path": "PDS.UsrTicketPrice"
						}
					},
					"PDS_UsrCaptainEmail_piyext2": {
						"modelConfig": {
							"path": "PDS.UsrCaptainEmail_piyext2"
						}
					},
					"GridDetail_56rrlio": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_56rrlioDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_br500o7_GridDetail_56rrlio",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_56rrlioDS_UsrRentalStart": {
									"modelConfig": {
										"path": "GridDetail_56rrlioDS.UsrRentalStart"
									}
								},
								"GridDetail_56rrlioDS_UsrRentalEnd": {
									"modelConfig": {
										"path": "GridDetail_56rrlioDS.UsrRentalEnd"
									}
								},
								"GridDetail_56rrlioDS_UsrCustomer": {
									"modelConfig": {
										"path": "GridDetail_56rrlioDS.UsrCustomer"
									}
								},
								"GridDetail_56rrlioDS_UsrManager": {
									"modelConfig": {
										"path": "GridDetail_56rrlioDS.UsrManager"
									}
								},
								"GridDetail_56rrlioDS_UsrTotalPrice": {
									"modelConfig": {
										"path": "GridDetail_56rrlioDS.UsrTotalPrice"
									}
								},
								"GridDetail_56rrlioDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_56rrlioDS.UsrComment"
									}
								},
								"GridDetail_56rrlioDS_Id": {
									"modelConfig": {
										"path": "GridDetail_56rrlioDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_56rrlioDS": [
							{
								"attributePath": "UsrYacht",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYachts",
							"attributes": {
								"UsrStatusDescription": {
									"path": "UsrStatus.Description",
									"type": "ForwardReference"
								},
								"UsrCaptainEmail_piyext2": {
									"path": "UsrCaptain.Email",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_56rrlioDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRentals",
							"attributes": {
								"UsrRentalStart": {
									"path": "UsrRentalStart"
								},
								"UsrRentalEnd": {
									"path": "UsrRentalEnd"
								},
								"UsrCustomer": {
									"path": "UsrCustomer"
								},
								"UsrManager": {
									"path": "UsrManager"
								},
								"UsrTotalPrice": {
									"path": "UsrTotalPrice"
								},
								"UsrComment": {
									"path": "UsrComment"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[{
                request: "usr.PushButtonRequest",
                /* Implementation of the custom query handler. */
                handler: async (request, next) => {
                    console.log("Button works...");
                    Terrasoft.showInformation("My button was pressed.");
                    var price = await request.$context.PDS_UsrPrice_xirzusw;
                    console.log("Price = " + price);
                    request.$context.PDS_UsrComment_enczraw = "comment from JS code!";
                    /* Call the next handler if it exists and return its result. */
                    return next?.handle(request);
                }
            },
			 {
                request: "crt.HandleViewModelAttributeChangeRequest",
                /* The custom implementation of the system query handler. */
                handler: async (request, next) => {
                     if (request.attributeName === 'PDS_UsrPrice_xirzusw' ||                 // if price changed
                       request.attributeName === 'PDS_UsrPassengerCount_k8utt4f' ) {         // or Passenger count changed
                        let price = await request.$context.PDS_UsrPrice_xirzusw;
                        let passengers = await request.$context.PDS_UsrPassengerCount_k8utt4f;
                        let ticket_price = price / passengers;
                        request.$context.PDS_UsrTicketPrice_2uwrw0x = ticket_price;
                    }
                    /* Call the next handler if it exists and return its result. */
                    return next?.handle(request);
                }
            },
			 {
                request: "usr.RunWebServiceRequest",
                /* Implementation of the custom query handler. */
                handler: async (request, next) => {
                    console.log("Run web service button works...");
                    
                    // get id from drive type lookup type object
                    var typeObject = await request.$context.PDS_UsrDriveType_tyl0ju2;
                    var driveTypeId = "";
                    if (typeObject) {
                        driveTypeId = typeObject.value;
                    }
                    /* Create an instance of the HTTP client from @creatio-devkit/common. */
                    const httpClientService = new sdk.HttpClientService();
                    /* Specify the URL to run web service method. */
                    const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
                    const transferName = "rest";
                    const serviceName = "YachtService";
                    const methodName = "GetMaxPriceByDriveTypeId";
                    const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
                    
                    //const endpoint = "http://y-todosan-nb.tscrm.com:40003/0/rest/YachtService/GetMaxPriceByDriveTypeId";
                    /* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
                    var params = {
                        driveTypeId: driveTypeId
                    };
                    const response = await httpClientService.post(endpoint, params);
                    
                    console.log("response max price = " + response.body.GetMaxPriceByDriveTypeIdResult);
                    
                    /* Call the next handler if it exists and return its result. */
                    return next?.handle(request);
                }
            },
									   {
    request: "crt.SaveRecordRequest",
    handler: async (request, next) => {
        const price = await request.$context.PDS_UsrPrice_xirzusw;
        const comment = ((await request.$context.PDS_UsrComment_enczraw) || "").trim();
        const setting = await new sdk.SysSettingsService()
            .getByCode("UsrMinPriceToRequireYachtComment");

        if (price > setting.value && !comment) {
            Terrasoft.showInformation(
                "Be sure to enter a comment if the price is more than " + setting.value + " USD!");
            return false; // не викликаємо next: запис не зберігається
        }
        return next?.handle(request); //якщо умова не спрацювала запит передається далі
    }
},
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			 "usr.YTValidator": {
                validator: function (config) {
                    return async function (control) {
                        let value = control.value;
                        let setting = await new sdk.SysSettingsService().getByCode(config.settingCode);
                        let maxValue = setting.value;
                        let valueIsCorrect = value <= maxValue;
                        var result;
                        if (valueIsCorrect) {
                            result = null;
                        } else {
                            result = {
                                "usr.YTValidator": {
                                    message: config.message
                                }
                            };
                        }
                        return result;
                    };
                },
                params: [
                    {
                        name: "settingCode"
                    },
                    {
                        name: "message"
                    }
                ],
                async: true
            }
		}/**SCHEMA_VALIDATORS*/
	};
});