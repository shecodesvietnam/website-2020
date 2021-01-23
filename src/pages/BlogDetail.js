import React from "react";
import parse from "html-react-parser";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Box } from "./../components/Box";
import { NormalText } from "./../components/Text";
import { pipe } from "./../utils/pipe";
import { replaceLink, replaceHashtag } from "./../utils/web";

// TODO: Convert to Graph API query-by-ID function
import { githubRawAssets } from "./../config.json";


function queryPost(id) {
  return {
    id:  698611530920245,
    title: "SHECODES VIETNAM CHÍNH THỨC THAY ÁO MỚI ",
    content: "Bộ nhận diện mới của SheCodes hôm nay sẽ chính thức lên sóng, cùng với rất nhiều sự kiện mới đang chuẩn bị xuất hiện. Bật mí cho mọi người, trong số đó sẽ có sự kiện lớn nhất trong năm của SheCodes!!! Hãy sẵn sàng cho một mùa hè nhiệt huyết với SheCodes Vietnam nha <3 Tìm hiểu thêm thông tin Shecodes Việt Nam tại: https://shecodesvietnam.com/",
    
    // query {
    //   article(
    //     where: {id: {_eq: 698611530920245}}
    //   ) {
    //     id
    //     title
    //       content

    //   }
    // }

    // id: 1,
    // images: [
    //   `${githubRawAssets}/2021/shopee-code-league/138333691_852685695512827_5225337392101164836_o.jpg`,
    //   `${githubRawAssets}/2021/shopee-code-league/138337842_852685688846161_7768404395455400447_o.jpg`,
    //   `${githubRawAssets}/2021/shopee-code-league/138654464_852685735512823_8334137342891119844_o.jpg`,
    //   `${githubRawAssets}/2021/shopee-code-league/138714444_852685815512815_8887944370065377149_o.jpg`,
    //   `${githubRawAssets}/2021/shopee-code-league/138814218_852685848846145_4341157711619049190_o.jpg`,
    //   `${githubRawAssets}/2021/shopee-code-league/138874367_852685762179487_6023640680178687749_o.jpg`,
    //   `${githubRawAssets}/2021/shopee-code-league/138945094_852685678846162_895022550607982408_o.jpg`,
    //   `${githubRawAssets}/2021/shopee-code-league/139709282_852685792179484_2250366936540888764_o.jpg`,
    //   `${githubRawAssets}/2021/shopee-code-league/140249641_852685758846154_2920704111411839066_o.jpg`,
    // ],
    // title:
    //   "[Chia sẻ cơ hội] Với vai trò đối tác hỗ trợ các chương trình, cuộc thi về CNTT tại Việt Nam. Lần này, SheCodes xin chia sẻ cơ hội tham gia giải đấu lập trình đến từ Shopee cho cộng đồng các SheCoders ^^ Ngoài các giải thưởng chính, cuộc thi sẽ có thêm giải thưởng tiền mặt trị giá $500 SGD dành cho top team với 100% thành viên là nữ coders. Chúc mọi người may mắn! #codelikeagirl",
    // content:
    //   "[Chia sẻ cơ hội] Với vai trò đối tác hỗ trợ các chương trình, cuộc thi về CNTT tại Việt Nam. Lần này, SheCodes xin chia sẻ cơ hội tham gia giải đấu lập trình đến từ Shopee cho cộng đồng các SheCoders ^^ Ngoài các giải thưởng chính, cuộc thi sẽ có thêm giải thưởng tiền mặt trị giá $500 SGD dành cho top team với 100% thành viên là nữ coders. Chúc mọi người may mắn! #codelikeagirl\nBạn đã sẵn sàng để tham gia Giải đấu Lập trình Online lớn nhất của @Shopee chưa? Sau thành công năm 2020, Shopee Code League 2021 mùa hai sẽ trở lại vào ngày 6 - 20 tháng 3 sắp tới! Đây là một sân chơi không thể bỏ qua đối với các bạn sinh viên và chuyên gia trong toàn khu vực để thử sức và thi đấu về khả năng lập trình của mình. Thành lập ngay một team từ 2 đến 4 thành viên để chinh phục những bài toán thực tế về data analytics, data science và thuật toán được thiết kế đặc biệt với đội ngũ Kỹ sư của Shopee. Ngoài ra, bạn còn có thể nâng cao kỹ thuật của mình thông qua hàng loạt hội thảo chuyên đề miễn phí của cuộc thi nữa đấy! Lên lịch hẹn và tham gia ngay Giải đấu Lập trình đáng mong đợi của năm cùng Shopee tại https://careers.shopee.com/codeleague/\nTìm hiểu thêm về SheCodes Vietnam tại: https://shecodesvietnam.com/ #ShopeeCodeLeague #TechAtShopee #datanalytics #datascience #coding #SheCodes",
  };
}

function BlogDetail(props) {
  var detail;

  if (!props.location.state) {
    detail = queryPost(props.match.params.postId);
  } else {
    detail = props.location.state.data;
  }

  return (
    <Box as="div" margin="0" padding="10rem 0 10rem 0" backgroundColor="#000">
      <Box
        as="article"
        display="block"
        margin="0 auto"
        width="90%"
        maxWidth
        textAlign="justify"
      >
        {/* <Carousel>
          {detail.images.map((image) => (
            <div>
              <img src={image} alt="Shopee Code League" />
            </div>
          ))}
        </Carousel> */}
        {detail.content.split(/\r*\n\s*/g).map(function paragraph(p) {
          return (
            <NormalText
              as="p"
              display="block"
              lineHeight="1.7"
              padding="0 1%"
              fontSize="2rem"
            >
              {parse(
                pipe(p, [
                  replaceLink(/(https?:\/\/[^\s]+)/g, {
                    color: "lightblue",
                    fontSize: 2,
                  }),
                  replaceHashtag(/\B#\w\w+\b/g, {
                    color: "lightblue",
                    fontSize: 2,
                  }),
                ])
              )}
            </NormalText>
          );
        })}
        {/* TODO: If user has logged in, display like, share button */}
        {/* TODO: If user has logged in, display comment section*/}
      </Box>
    </Box>
  );
}

export default BlogDetail;
