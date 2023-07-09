import { Container } from "react-bootstrap";
import HomePageBannerCarousel from "../components/HomePageBannerCarousel";
import PageFooter from "../components/PageFooter";
import RecentJobPosts from "../components/RecentJobPosts";
import SearchBox from "../components/SearchBox";
import TopSearchedCompanies from "../components/TopSearchedCompanies";
import { useOutletContext } from "react-router-dom";

export default function HomePage() {
    const { user } = useOutletContext();
    console.log("user:", user);
    return (
        <>
            <HomePageBannerCarousel />
            <Container>
                {/* <SearchBox /> */}
                <TopSearchedCompanies />
                <RecentJobPosts />
            </Container>
        </>
    );
}
