import {
  Avatar,
  Flex,
  Center,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  Img,
  Box,
} from "@chakra-ui/react";
import { AiFillHeart, AiOutlineEllipsis, AiOutlineHeart } from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";
import { HiOutlineEllipsisVertical } from "react-icons/hi";
import { TbMessageCircle2 } from "react-icons/tb";
import { GrShare } from "react-icons/gr";
import { BsBookmark } from "react-icons/bs";
import { useEffect, useState } from "react";
import ModalComment from "./modalcommentpost";
import { api } from "../api/api";
import { useSelector } from "react-redux";
import moment from "moment";
export default function Card(props) {
  const userSelector = useSelector((state) => state.login.auth);
  const [liked, setLiked] = useState(props.liked);
  const [allLiked, setAllLiked] = useState({});
  const [poster, setPoster] = useState({});
  const [postLike, setPostLike] = useState();
  async function fetchLikeAmount() {
    await api.get(`/like/getlike/${props.id}`).then((res) => {
      setPostLike(res.data);
    });
  }
  const [likeDetails, setLikeDetails] = useState({
    userId: userSelector.id,
    liked: props.liked,
    postId: props.id,
  });
  useEffect(() => {
    api.get("/like/").then((res) => {
      setAllLiked(res.data);
      api.get(`/auth/getbyId/${props.posterId}`).then((res) => {
        setPoster(res.data);
        props.userSelectorLike.map((val) => {
          if (val.postId == props.id) {
            console.log(val.liked);
            console.log(props.userSelectorLike);
            console.log(props.id);
            setLiked(val.liked);
          }
        });
      });
      fetchLikeAmount();
    });
  }, []);
  const modalComment = useDisclosure();
  return (
    <>
      <Center
        flexDir={"column"}
        className="card-container"
        borderBottom={"1px solid #dbdbdb "}
        pb={"20px"}
      >
        <Flex
          alignItems={"center"}
          paddingY={"10px"}
          className="card"
          pl={"5px"}
        >
          <Flex alignItems={"center"} gap={"10px"}>
            <Avatar
              w={"45px"}
              h={"45px"}
              src={
                poster.avatar_url
                  ? poster.avatar_url
                  : "https://bit.ly/broken-link"
              }
            ></Avatar>
            <Flex fontWeight={700}>{poster.fullname} </Flex>
            <Flex
              onClick={() => {
                console.log(props.liked);
                console.log(allLiked);
              }}
              fontSize={"12px"}
              color={"blackAlpha.600"}
            >
              {moment(props.createdAt, "YYYYMMDD").fromNow()};
            </Flex>
          </Flex>
          <Flex w={"290px"} h={"100%"}></Flex>

          <Flex pr={"10px"}>
            <Icon
              borderRadius={"50px"}
              as={AiOutlineEllipsis}
              fontSize={"28px"}
              onClick={() => {
                console.log(likeDetails);
              }}
            ></Icon>
          </Flex>
        </Flex>
        <Img src={props.media} w={"100%"} h={"400px"}></Img>
        <Flex gap={"12px"} pt={"10px"} w={"100%"}>
          <Icon
            as={!liked ? AiFillHeart : AiOutlineHeart}
            fontSize={"32px"}
            color={!liked ? "red" : "black"}
            onClick={async () => {
              await api.post("/like/v1", likeDetails).then(() => {
                setLikeDetails({
                  userId: userSelector.id,
                  liked: !liked,
                  postId: props.id,
                });

                setLiked(!liked);
                fetchLikeAmount();
              });
            }}
          ></Icon>

          <Icon as={TbMessageCircle2} fontSize={"30px"}></Icon>
          <Icon as={GrShare} fontSize={"26px"}></Icon>
          <Flex w={"410px"} h={"100%"}>
            {" "}
          </Flex>
          <Icon as={BsBookmark} fontSize={"28px"}></Icon>
        </Flex>
        <Flex w={"100%"} pb={"10px"}>
          <Flex fontWeight={"500"}>{postLike?.count} likes</Flex>
        </Flex>
        <Flex w={"100%"} pb={"10px"}>
          <span>
            <span style={{ fontWeight: "500", alignItems: "center" }}>
              {" "}
              {poster.fullname}
            </span>
            <span style={{ overflowWrap: "anywhere", fontWeight: "600" }}>
              &nbsp;{props.title}
            </span>
            <span style={{ overflowWrap: "anywhere" }}>
              &nbsp;{props.caption}
            </span>
          </span>
        </Flex>
        <Flex w={"100%"} pb={"10px"}>
          <Flex
            onClick={() => modalComment.onOpen()}
            fontSize={"14px"}
            color={"blackAlpha.600"}
            cursor={"pointer"}
          >
            View all 163 comments
          </Flex>
        </Flex>
      </Center>
      <Modal
        isOpen={modalComment.isOpen}
        onClose={modalComment.onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalComment onClose={modalComment.onClose} />
        </ModalContent>
      </Modal>
    </>
  );
}
