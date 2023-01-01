import Carousel from "react-bootstrap/Carousel";
import dreamJob from "../resources/dream-job.png";
import bestCompanies from "../resources/best-companies.png";
import skills from "../resources/skills.png";

function HomePageBannerCarousel() {
    // const carouselItems  = [];
    var carouselItems = [
        { header: "Make your first move now", imageSrc: dreamJob },
        { header: "Search for best companies here", imageSrc: bestCompanies },
        { header: "Show your skills to recruiters", imageSrc: skills },
    ];
    return (
        <Carousel>
            {carouselItems.map((item, index) => {
                return (
                    <Carousel.Item key={"carousal-item-" + index}>
                        <img
                            className="d-block w-100"
                            src={item.imageSrc}
                            alt={item.header}
                        />
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
}

export default HomePageBannerCarousel;
