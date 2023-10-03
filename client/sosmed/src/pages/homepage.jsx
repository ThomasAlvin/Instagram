import { Flex, Center, Img, Icon, Box, Avatar } from "@chakra-ui/react";
import logo from "../assets/images/instagram-text-logo.png";
import logo2 from "../assets/images/Googleplay.png";
import logo3 from "../assets/images/Instagram-logo.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { FiCamera } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import Card from "../components/card";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import { api } from "../api/api";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/pagination";
import Sidebar from "../components/sidebar";
export default function HomePage() {
  const [liked, setLiked] = useState(false);
  const [userSelectorLike, setUserSelectorLike] = useState([]);
  const userSelector = useSelector((state) => state.login.auth);
  const [posts, setPosts] = useState([]);
  async function fetchLikes() {
    await api
      .get("/like/getuserlike/" + userSelector.id)
      .then((response) => {
        console.log(response.data);
        setUserSelectorLike(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    api
      .get("/post")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    try {
      fetchLikes();
    } catch (err) {
      alert(err.message);
    }
  }, []);
  return (
    <>
      <Box className="homepage-sidebar">
        <Sidebar />
      </Box>
      <Center pb={"50px"} flexDir={"column"}>
        <Center
          flexDir={"column"}
          border={"1px #dbdbdb solid"}
          className="homepage-container"
        >
          <Flex alignItems={"center"}>
            <Img src={logo} className="homepage-logo"></Img>
            <Box className="homepage-emptybox"></Box>
            <Flex className="homepage-icons">
              <Icon
                as={AiOutlineHeart}
                onClick={() => {
                  console.log(userSelectorLike);
                  console.log(posts);
                }}
                fontSize={"30px"}
              ></Icon>
              <Icon as={AiOutlineMessage} fontSize={"30px"}></Icon>
            </Flex>
          </Flex>
          <Flex
            gap={"10px"}
            borderBottom={"1px #dbdbdb solid"}
            justifyContent={"space-between"}
            margin={0}
            padding={0}
            boxSizing="border-box"
          >
            <Swiper
              slidesPerView={8}
              spaceBetween={0}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Box
                  className="homepage-storybox"
                  padding={"3px"}
                  bgColor={"pink"}
                  borderRadius={"50%"}
                >
                  <Avatar
                    w={"100%"}
                    h={"100%"}
                    border={"2px white solid"}
                    size={"lg"}
                    src={logo}
                  ></Avatar>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  className="homepage-storybox"
                  padding={"3px"}
                  bgColor={"pink"}
                  borderRadius={"50%"}
                >
                  <Avatar
                    w={"100%"}
                    h={"100%"}
                    border={"2px white solid"}
                    size={"lg"}
                    src={logo3}
                  ></Avatar>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  className="homepage-storybox"
                  padding={"3px"}
                  bgColor={"pink"}
                  borderRadius={"50%"}
                >
                  <Avatar
                    w={"100%"}
                    h={"100%"}
                    border={"2px white solid"}
                    size={"lg"}
                    src={logo2}
                  ></Avatar>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  className="homepage-storybox"
                  padding={"3px"}
                  bgColor={"pink"}
                  borderRadius={"50%"}
                >
                  <Avatar
                    w={"100%"}
                    h={"100%"}
                    border={"2px white solid"}
                    size={"lg"}
                    src={logo3}
                  ></Avatar>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  className="homepage-storybox"
                  padding={"3px"}
                  bgColor={"pink"}
                  borderRadius={"50%"}
                >
                  <Avatar
                    w={"100%"}
                    h={"100%"}
                    border={"2px white solid"}
                    size={"lg"}
                    src={logo3}
                  ></Avatar>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  className="homepage-storybox"
                  padding={"3px"}
                  bgColor={"pink"}
                  borderRadius={"50%"}
                >
                  <Avatar
                    w={"100%"}
                    h={"100%"}
                    border={"2px white solid"}
                    size={"lg"}
                    src={logo2}
                  ></Avatar>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  className="homepage-storybox"
                  padding={"3px"}
                  bgColor={"pink"}
                  borderRadius={"50%"}
                >
                  <Avatar
                    w={"100%"}
                    h={"100%"}
                    border={"2px white solid"}
                    size={"lg"}
                    src={logo3}
                  ></Avatar>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  className="homepage-storybox"
                  padding={"3px"}
                  bgColor={"pink"}
                  borderRadius={"50%"}
                >
                  <Avatar
                    w={"100%"}
                    h={"100%"}
                    border={"2px white solid"}
                    size={"lg"}
                    src={logo3}
                  ></Avatar>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  className="homepage-storybox"
                  padding={"3px"}
                  bgColor={"pink"}
                  borderRadius={"50%"}
                >
                  <Avatar
                    w={"100%"}
                    h={"100%"}
                    border={"2px white solid"}
                    size={"lg"}
                    src={logo}
                  ></Avatar>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Flex>
          <Flex flexDir={"column"}>
            {posts.map((val) => {
              return (
                <Card
                  fetchLikes={fetchLikes}
                  liked={liked}
                  setLiked={setLiked}
                  userSelectorLike={userSelectorLike}
                  setUserSelectorLike={setUserSelectorLike}
                  media={val.media_url}
                  id={val.id}
                  title={val.title}
                  caption={val.caption}
                  posterId={val.userId}
                  createdAt={val.createdAt}
                />
              );
            })}
          </Flex>
        </Center>
        <Box className="homepage-footer">
          <Footer />
        </Box>
      </Center>
    </>
  );
}
