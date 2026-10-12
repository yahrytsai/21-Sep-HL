namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrYachtEventsSchema

	/// <exclude/>
	public class UsrYachtEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrYachtEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrYachtEventsSchema(UsrYachtEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("ba6ebb1b-4b89-4e67-9b6b-2f776e47f2a2");
			Name = "UsrYachtEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("bf8a0a3d-34a4-466e-83a9-ea29d408e4fe");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,229,82,193,138,219,48,16,61,39,144,127,24,124,178,33,136,246,176,151,238,118,161,9,105,89,8,109,217,56,11,165,244,160,200,19,71,197,150,140,70,78,154,150,253,247,142,172,100,55,235,108,97,15,237,169,115,177,53,122,122,51,239,205,24,89,35,53,82,33,228,232,156,36,187,246,98,106,205,90,151,173,147,94,91,51,26,254,26,13,129,163,37,109,74,88,236,201,99,125,121,154,58,125,88,215,214,252,241,210,161,152,25,175,189,70,122,9,70,204,182,104,252,17,250,181,75,239,187,220,92,115,19,6,93,186,80,27,172,229,71,214,0,111,33,89,146,251,34,213,198,83,146,125,139,143,154,118,85,105,5,170,146,68,208,221,61,195,2,111,96,34,9,159,185,137,36,7,253,39,124,118,203,29,235,2,97,107,117,1,159,204,66,110,89,71,106,87,223,81,121,32,52,5,186,49,68,194,9,174,89,84,71,251,206,149,4,152,61,210,157,48,135,88,113,23,226,129,237,72,131,217,229,83,88,228,133,125,144,195,178,211,120,206,34,190,135,45,80,233,90,86,208,56,173,130,71,221,35,241,1,125,190,111,176,152,218,170,173,205,157,172,90,188,58,32,175,211,96,227,231,0,79,250,133,245,26,210,72,116,13,175,95,133,200,158,2,122,122,66,160,184,161,169,52,10,43,44,184,190,119,45,50,235,57,142,188,11,171,192,203,72,178,196,28,235,166,146,62,116,108,112,7,115,171,100,165,127,202,85,133,139,14,151,70,29,75,66,199,203,106,216,117,222,84,113,139,100,91,167,24,99,29,147,140,207,171,132,120,88,147,184,94,201,24,146,51,126,18,157,41,55,148,91,59,209,101,60,37,153,200,237,161,126,246,2,17,220,124,76,136,247,214,213,210,167,61,113,92,152,93,4,182,17,102,203,219,51,183,67,248,141,179,187,206,130,217,15,133,77,80,121,100,233,195,239,71,195,193,96,240,56,162,43,184,248,63,230,51,183,187,127,54,159,139,191,54,155,222,47,127,238,127,3,139,247,29,175,123,5,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
			LocalizableStrings.Add(CreateValueIsTooLowLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("549d20e5-bf82-46b4-34b6-59cb68e6e058"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("bf8a0a3d-34a4-466e-83a9-ea29d408e4fe"),
				CreatedInSchemaUId = new Guid("ba6ebb1b-4b89-4e67-9b6b-2f776e47f2a2"),
				ModifiedInSchemaUId = new Guid("ba6ebb1b-4b89-4e67-9b6b-2f776e47f2a2")
			};
			return localizableString;
		}

		protected virtual SchemaLocalizableString CreateValueIsTooLowLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("15d2ab18-7c50-83e1-3607-1608111305da"),
				Name = "ValueIsTooLow",
				CreatedInPackageId = new Guid("bf8a0a3d-34a4-466e-83a9-ea29d408e4fe"),
				CreatedInSchemaUId = new Guid("ba6ebb1b-4b89-4e67-9b6b-2f776e47f2a2"),
				ModifiedInSchemaUId = new Guid("ba6ebb1b-4b89-4e67-9b6b-2f776e47f2a2")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("ba6ebb1b-4b89-4e67-9b6b-2f776e47f2a2"));
		}

		#endregion

	}

	#endregion

}

