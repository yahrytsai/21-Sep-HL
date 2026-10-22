namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: UsrCreateYachtRentalsMethodsWrapper

	/// <exclude/>
	public class UsrCreateYachtRentalsMethodsWrapper : ProcessModel
	{

		public UsrCreateYachtRentalsMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			var yachtId = Get<Guid>("YachtId");
			var start = DateTime.UtcNow.AddDays(7);
			var schema = UserConnection.EntitySchemaManager.GetInstanceByName("UsrYachtRentals");
			for (int i = 0; i < 3; i++) {
			    var rental = schema.CreateEntity(UserConnection);
			    rental.SetDefColumnValues();
			    rental.SetColumnValue("UsrYachtId", yachtId);
			    rental.SetColumnValue("UsrRentalStart", start.AddDays(i));
			    rental.SetColumnValue("UsrRentalEnd", start.AddDays(i + 1));
			    rental.Save();
			}
			return true;
		}

		#endregion

	}

	#endregion

}

