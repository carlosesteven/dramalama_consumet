import { Card, CardHeader, CardBody, Link } from "@nextui-org/react";
import Image from "next/image";

import styles from "../../page.module.css";

const SearchedDataFormatter = async (data) => {
	return (
		<section
			className={`flex items-center overflow-auto pb-2 ${styles.ScrollBarAdjuster}`}
		>
			{data &&
				data.results.length > 0 &&
				data.results.map((item, index) => (
					<Link
						key={index}
						href={`/kdrama/${encodeURIComponent(item.id)}`}
						aria-label="anime redirection links"
						className="flex flex-col items-center mx-1"
						title={item.title}
					>
						<Card className="overflow-hidden" isPressable>
							<CardBody>
								<Image
									alt="Searched Kdrama Poster"
									src={item.image}
									width={185}
									height={120}
									className="rounded-md h-64"
									priority
								/>
							</CardBody>
							<CardHeader>
								<h4 className="antialiased  text-small text-center uppercase w-44 overflow-hidden whitespace-nowrap text-ellipsis ">
									{item.title}
								</h4>
							</CardHeader>
						</Card>
					</Link>
				))}
		</section>
	);
};

export default SearchedDataFormatter;
