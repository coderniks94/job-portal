import { Container } from "react-bootstrap";
import HomePageBannerCarousel from "../components/HomePageBannerCarousel";
import SearchBox from "../components/SearchBox";

export default function HomePage(){
    return (
        <Container>
            <HomePageBannerCarousel/>
            <SearchBox/>
        </Container>
    )
}