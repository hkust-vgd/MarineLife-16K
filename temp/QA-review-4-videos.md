# Rà soát Q&A của bốn video demo

## Cập nhật sau khi được yêu cầu sửa

Đã chỉnh bản demo webpage dựa trên các điểm bên dưới. Bảng rà soát gốc được giữ
để truy vết, không phản ánh toàn bộ nội dung đang hiển thị sau khi sửa.

- Reef fish: caption theo màu dark green và góc tĩnh của attribute; bỏ diễn đạt
  foreground-to-wide. Bổ sung texture, ánh sáng và chất lượng từ dữ liệu hiển thị.
  Q3 có phương án nhiễu mới chứa sea lion để tránh phụ thuộc phân loại san hô.
- Coral reef: tách khung hình rộng khỏi pan/góc ngang; viết lại motion answer cho
  tự nhiên. Caption bổ sung texture và lighting đã có. Q7 có phương án nhiễu
  môi trường mới để tránh clear water cùng đúng với shallow reef flat.
- School of fish: bỏ khẳng định chưa rõ về kích thước; ghi individual body size
  not specified. Câu mở hỏi đúng về framing/viewing angle, đáp án nói rõ chưa xác
  định camera pan hay translate. Thay phương án nhiễu ánh sáng/môi trường chồng lấn.
- Sharks: Q4 B/C khác nhau rõ; Q3 thay phương án nhiễu có rạn đá bằng sea turtle;
  Q6 hỏi cùng tiêu chí màu nước; Q7 mô tả ánh sáng tự nhiên và bỏ suy đoán độ sâu.
  Caption bỏ bait/camera gear, thống nhất hoạt động và thêm chất lượng/ánh sáng.
- Bốn caption prompt yêu cầu mô tả những gì nhìn thấy và chuyển động camera khi
  có căn cứ, không bắt buộc suy đoán kích thước/hình dạng không có trong reference.
- `demo-data.js` và `demo-attributes.js` đã đồng bộ. Sea turtle giữ nguyên Q&A.
  `index-original.html` giữ bản gốc để đối chiếu; số liệu benchmark không thay đổi.

Đây là sửa tính nhất quán và cách diễn đạt của demo; chưa phải xác nhận lại toàn
bộ annotation bằng video. Màu cá, trạng thái camera và các mô tả texture/lighting
bổ sung vẫn cần chủ dataset xác nhận nếu đưa vào ground truth đánh giá chính thức.

## Biên bản kiểm tra trước khi sửa

Phạm vi: Reef fish, Coral reef, School of fish và Sharks (không gồm Sea turtle).
Đã đọc 33 câu: 25 MCQ, 4 câu motion mở và 4 caption. Số Q dưới đây theo thứ tự trên webpage.
Đối chiếu câu hỏi, mọi lựa chọn, đáp án, attribute và caption. Đây là rà soát văn bản;
chưa xem lại toàn bộ video để xác nhận nội dung hình ảnh, tốc độ hay chuyển động camera.
Không sửa câu hỏi, lựa chọn hoặc đáp án trong lần kiểm tra này.

## Các điểm cần kiểm tra

| Video / câu | Bằng chứng | Nhận định và việc cần làm |
|---|---|---|
| Reef fish / Q2 và Q8 | Q2 + Color: “dark green body”; caption: “dark blue-black reef fish” | Mô tả màu chưa thống nhất. Xem lại cá chính và ánh sáng để chọn cách gọi màu phù hợp; chưa thể kết luận bên nào sai. |
| Reef fish / Q4, Q7 và Q8 | Q4/Q7: wide shot, static angle; Q8: “foreground-to-wide camera position” | Caption dễ được hiểu là có thay đổi khung hình, trong khi các câu khác nhấn mạnh góc tĩnh. Cá bơi ra xa cũng có thể tạo thay đổi đó, nên chưa phải mâu thuẫn chắc chắn về camera. Xác định chủ thể hay camera chuyển động. |
| Reef fish / Q8 | Prompt yêu cầu texture/pattern và video quality; caption có màu, hình dáng và “clear daylight water” | Chưa mô tả rõ texture/pattern hoặc chất lượng video. Độ trong của nước không thay cho độ rõ của video. “Adult” và “medium” không tự mâu thuẫn vì một bên là giai đoạn phát triển, một bên là kích thước. |
| Coral reef / Q4–Q6 và attribute | “Camera position” được điền “Camera pans around…” | Pan là chuyển động, chưa cho biết vị trí camera. Q5/Q6 giữ cùng cách diễn đạt nên nhất quán với nhau nhưng chưa phân biệt position / angle / movement theo yêu cầu prompt. |
| Coral reef / Q6 | Caption không nói texture/pattern, lighting, hình dạng cụ thể hoặc trạng thái của rạn san hô | Đáp án chưa phủ hết yêu cầu caption; chỉ nói hoạt động của hai thợ lặn. Không tự suy ra san hô chuyển động từ chuyển động camera. |
| Coral reef / Q7 | A “clear water”; B “a sunlit shallow reef flat” | Hai mô tả có thể cùng đúng vì nói về hai thuộc tính khác nhau. Cần xem video có đủ bằng chứng để loại B không; không thể chỉ vì A khớp attribute mà coi B sai. |
| School of fish / Q2, Q6 | “Large” / “a large silver school of fish” | Chưa rõ lớn là kích thước mỗi con hay quy mô đàn. Không phải mâu thuẫn đã xác nhận; cần thống nhất đối tượng được mô tả. |
| School of fish / Q4–Q6 | “Centered”, “horizontal”, “wide-angle” | Mô tả bố cục/góc nhìn, chưa xác định camera đứng yên, pan hay tracking. Câu hỏi motion mở Q5 chưa có câu trả lời rõ về chuyển động camera. |
| School of fish / Q6 | Caption không nói texture/pattern hoặc hình dạng cụ thể | Thiếu so với yêu cầu caption, dù các thông tin đã có nhìn chung khớp attributes. |
| School of fish / Q8 | A “clear water”; D “a sunlit shallow reef flat” | Có thể đồng thời đúng; cần kiểm tra như câu môi trường của Coral reef. |
| School of fish / Q9 | A “Light filtering down through the water”; B “Bright natural sunlight” | Ánh sáng tự nhiên mạnh vẫn có thể lọc qua nước. Hai lựa chọn chưa loại trừ nhau; nên viết phương án nhiễu rõ hơn sau khi xác nhận hình ảnh. |
| Sharks / Q4 | B “wide and horizontal shot”; C “wide horizontal shot”; cùng “camera pans around” | Lỗi chắc chắn: B và C tương đương về nghĩa. Reference chỉ chọn B nhưng không có cơ sở ngữ nghĩa để chấm C sai. Thay một phương án hoặc chấp nhận cả hai trong dữ liệu đánh giá. |
| Sharks / Q7 | C “medium depth, sunlight reaches the area”; D “sunlight can penetrate through” | C bao hàm ý D; nếu C đúng thì D cũng phù hợp về ánh sáng. Còn “medium depth” cần nguồn xác nhận, không suy ra độ sâu chính xác từ màu nước. |
| Sharks / Q6 | C “dark blue seawater”; D “blue water”; A “open ocean” | C là trường hợp cụ thể của D; A nói loại môi trường thay vì màu. Có nguy cơ nhiều đáp án phù hợp. Xem video rồi xây lại phương án cùng một tiêu chí. |
| Sharks / Q3 | A “diver, shark, fish around”; D thêm “school of small fish” và “uneven rock reef” | Cần xác nhận có đàn cá nhỏ và rạn đá hay không. Nếu có đủ, cả A và D đều thỏa “only objects present”; câu hỏi không yêu cầu liệt kê đầy đủ nhất. |
| Sharks / Q5, Q8 và Q9 | Q5/Q8: “swims fairly fast”; Q9: “circle and glide” | Chưa mâu thuẫn trực tiếp: circle/glide không quy định tốc độ. Caption bỏ thông tin tốc độ, cần xem lại trước khi thống nhất. |
| Sharks / Q9 | “bait or camera gear”; caption không nói size, lighting hoặc video quality rõ ràng | “Bait or camera gear” thể hiện chưa xác định được vật thể; cần kiểm tra hoặc dùng mô tả nhìn thấy chắc chắn. Caption chưa đáp ứng đủ prompt. “Particles” còn khiến danh sách phụ dễ vượt giới hạn ba nếu được tính là một nhóm đối tượng. |

## Đã đọc những câu nào?

- Reef fish (`BigIsland_Jan3_2023__0019`): Q1–Q8. Q1, Q5, Q6 không thấy xung đột văn bản; Q3 reference khớp secondary objects, nhưng các loài san hô trong phương án C cần hình ảnh để loại trừ. Các điểm Q2/Q4/Q7/Q8 nêu trên.
- Coral reef (`KAUST_Jun2023__0021`): Q1–Q7. Q1–Q3 khớp attributes; Q4–Q7 có điểm thiếu rõ ràng hoặc cần xác nhận như bảng.
- School of fish (`GreenIsland_Guanqun__0015`): Q1–Q9. Q1, Q3, Q7 khớp attributes; các điểm Q2/Q4/Q5/Q6/Q8/Q9 nêu trên.
- Sharks (`WestPalmBeach_May2023__0003`): Q1–Q9. Q1/Q2 khớp attributes; Q3–Q9 có các điểm nêu trên.

Các lựa chọn nhiễu chứa đối tượng khác không tự là lỗi: đó có thể là phương án sai có chủ đích.
Cả bốn caption đều dưới 80 từ. Không có lỗi nhãn đáp án trỏ sai nội dung lựa chọn trong 25 MCQ.
Đáp án ngắn hoặc thiếu một chi tiết không đồng nghĩa với mâu thuẫn; đã phân biệt các trường hợp này ở bảng.

## Thay đổi attribute

Webpage hiện đọc `static/js/demo-attributes.js`: 11 thuộc tính × 5 clip = 55 giá trị.
48 giá trị gốc và 7 mô tả bổ sung trước đây được giữ nguyên. Không còn nhãn “Demo addition” trên giao diện.
File gốc `demo-data.js` và toàn bộ Q&A giữ nguyên. `demo-supplements.js` được giữ làm lịch sử nhưng không còn được tải.
Các mô tả bổ sung không trở thành annotation đã kiểm chứng chỉ vì đã bỏ nhãn; nguồn gốc được ghi trong mã và README.
