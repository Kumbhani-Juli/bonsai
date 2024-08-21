import {
	faClipboardCheck,
	faClock,
	faCoffee,
	faFileContract,
	faFileInvoiceDollar,
	faFileLines,
	faFolder,
	faGreaterThan,
	faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import proposalImg from "../../assets/images/proposals.png";
import contractsImg from "../../assets/images/contract.png";
import clientCrmImg from "../../assets/images/clientcrm.png";
import timeTrackingImg from "../../assets/images/timetracking.png";
import invoicesImg from "../../assets/images/invoice.png";
import taskTrackingImg from "../../assets/images/tasktracking.png";
import accountingTaxesImg from "../../assets/images/accounting-taxes.png";
import HomeMiddleSectionData from "./HomeMiddleSectionData";
const HomeMiddleSection = () => {
	const [selectedItem, setSelectedItem] = useState({
		title: "Proposals",
		innerTitle: "Win More Work",
		icon: faFileLines,
		slugs: "proposals",
		content:
			"With just a few clicks, you can craft structured proposals with clear estimates to close your deals faster.",
		image: proposalImg,
	});
	const MiddleSectionTitleList = [
		{
			title: "Proposals",
			innerTitle: "Win More Work",
			icon: faFileLines,
			slugs: "proposals",
			content:
				"With just a few clicks, you can craft structured proposals with clear estimates to close your deals faster.",
			image: proposalImg,
		},
		{
			title: "Contracts",
			innerTitle: "Protect Your Business",
			icon: faFileContract,
			slugs: "contracts",
			content:
				"Simply answer a few questions to generate an already vetted contract template. Once you hit send, the contract can be e-signed in minutes.",
			image: contractsImg,
		},
		{
			title: "Client CRM",
			innerTitle: "Stay Organized",
			icon: faFolder,
			slugs: "client-crm",
			content:
				"Manage your clients and ongoing projects all in one place. Organize all the documents, files and payments together for you and your client.",
			image: clientCrmImg,
		},
		{
			title: "Time Tracking",
			innerTitle: "Keep It Simple",
			icon: faClock,
			slugs: "time-tracking",
			content:
				"Easily track the time you are working, automatically populate timesheets and seamlessly switch between your projects for the day.",
			image: timeTrackingImg,
		},
		{
			title: "Invoices",
			innerTitle: "Get Paid Faster",
			icon: faFileInvoiceDollar,
			slugs: "invoices",
			content:
				"Create and customize invoices, receive updates about payment timelines, and have automatic payment reminders sent on your behalf.",
			image: invoicesImg,
		},
		{
			title: "Task Tracking",
			innerTitle: "Be More Effective",
			icon: faClipboardCheck,
			slugs: "task-tracking",
			content:
				"Give your day more structure with simple task management on your projects. Track time for each task and stay up-to-date.",
			image: taskTrackingImg,
		},
		{
			title: "Accounting & Taxes",
			innerTitle: "Automate Your Finances",
			icon: faReceipt,
			slugs: "accounting-and-taxes",
			content:
				"Don't worry about freelance finances when you have automatic expense tracking, income reporting and estimated tax planning.",
			image: accountingTaxesImg,
		},
	];
	const handleItemClick = (item) => {
		setSelectedItem(item);
	};
	return (
		<>
			<div className="container" style={{ marginTop: "100px" }}>
				<div className="row" style={{ padding: "20px", borderRadius: "5px" }}>
					<div className="col-md-4">
						<ul className="proposals-list">
							{MiddleSectionTitleList?.map((data, index) => (
								<li
									key={index}
									className={`proposal-item ${
										selectedItem.slugs === data.slugs ? "active" : ""
									}`}
									onClick={() => handleItemClick(data)}
								>
									<h4>
										<FontAwesomeIcon icon={data.icon} />
										&nbsp;&nbsp;{data.title}
									</h4>
									{selectedItem.slugs === data.slugs && (
										<h5>
											<FontAwesomeIcon icon={faGreaterThan} />
										</h5>
									)}
								</li>
							))}
						</ul>
					</div>
					<div
						className="col-md-8 rounded"
						style={{
							backgroundColor: "#f2faff",
							paddingTop: "20px",
							paddingBottom: "10px",
						}}
					>
						{selectedItem && <HomeMiddleSectionData data={selectedItem} />}
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeMiddleSection;
