import { IoIosPeople } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import { MdHolidayVillage } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

const SidebarItems = [

	{
		id: 3000,
		text: "Employee Management",
		nestedFunctions: [
			{
				id: 300,
				link: "/admin/staff/AddStaff",
				nestedItemicon: <AiOutlineUserAdd />,
				nestedItemtext: "Add Employee",
			},

			{
				id: 301,
				link: "/admin/staff/ManageStaff",
				nestedItemicon: <BsPeopleFill />,
				nestedItemtext: "Manage Employee",
			},

		],
	},

	{
		id: 3000,
		text: "Leave Management",
		nestedFunctions: [
		
			{
				id: 302,
				link: "/admin/leave/AddLeave",
				nestedItemicon: <FaWpforms />,
				nestedItemtext: "Add Leave",
			},

			{
				id: 303,
				link: "/admin/leave/ManageLeave",
				nestedItemicon: <MdHolidayVillage />,
				nestedItemtext: "Manage Leaves",
			},

		],
	},

	{
		id: 3000,
		text: "Payroll Management",
		nestedFunctions: [

			{
				id: 304,
				link: "/admin/payroll/AddPayroll",
				nestedItemicon: <GiTakeMyMoney />,
				nestedItemtext: "Add Payroll",
			},

			{
				id: 305,
				link: "/admin/payroll/ManagePayroll",
				nestedItemicon: <GiReceiveMoney />,
				nestedItemtext: "Manage Payrolls",
			},
		],
	},


];

export default SidebarItems;