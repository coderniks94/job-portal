import { Container } from "react-bootstrap";
import HomePageBannerCarousel from "../components/HomePageBannerCarousel";
import PageFooter from "../components/PageFooter";
import RecentJobPosts from "../components/RecentJobPosts";
import SearchBox from "../components/SearchBox";
import TopSearchedCompanies from "../components/TopSearchedCompanies";

export default function HomePage() {
    return (
        <>
            <HomePageBannerCarousel />
            <Container>
                <SearchBox />
                <TopSearchedCompanies />
                <RecentJobPosts />
            </Container>
        </>
    );
}
