import Image from "next/image";
import { useTheme } from "next-themes";

const data = [
  {
    id: 1,
    img: "https://s3-alpha-sig.figma.com/img/14e2/b759/2e0096efb791d6360c9814f24b18fd5d?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DAkPVZvGXPsFYOFzC9avJwTPT56N-5zw~Tbt0JyrUpMo~Vfj8MJ619H8AnxUXFyhLDPs9pKB5qiBpR68EN-6X4YKADG2TRvHc-AJE0n14ffYuYwCtyqHdrjbKqI9jHVCRGZL2wFVz4rKIfJEphcD2Jg26eNYOiWxPGyK9RbLK6i2Y9Tlw9mVV8DnRXALT-41Ysd5UhLG1HzC-35goa4li6UMrmqdfP1j0JEpiM5NzIvLuugqmc44Ln00EZeESBvpi9su3w902enZUPAADSVdgMhYhaGOIh9JSVsROLd1o0CDFi7z4VXP092wd6vFOaKBM4eZXXgLk-ZqDA1O4VGb-g__",
    name: "Marcus Bergson",
    date: "Nov 15 2023",
    amount: "$80,000",
    status: "Paid",
  },
  {
    id: 2,
    img: "https://s3-alpha-sig.figma.com/img/fa5c/97a4/81a0d41ad7a31a50796eb9638ebc1a84?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XQmVvhegbi7BK50lISrl3hVFKU4VgW-3nDzPBT6wmMNcRz4TrUkSTrTbNsXZp5da-UrTxc~O7-JTZaTES8gkP-Phy1z5U4qrks-8MhASS3zsr80v-I4XJ0eUF1VcEafdoHQzVtmzbpnWfeyA-hnRKtUGEbXxiYKGfW4JM2sUIMy0a40lhBVEKxzGVWOSetp-LcOhQaxsQbH~0Jx8ysdiz~YIhs0sCUdSk~mjw0KkdIaG8TLqbrFGQjXabSLz0Gv4MZFNM3AuWP8cA9~DUFzpenUwd0gBLXmBTxRqV2i-IxzaHx2ECDTmQg1wBl2YtnSN8vv6McR1ayM~lWan~JyAZg__",
    name: "Jaydon Vaccaro",
    date: "Nov 15 2023",
    amount: "$150,000",
    status: "Refund",
  },
  {
    id: 3,
    img: "https://s3-alpha-sig.figma.com/img/e638/811e/48c1011e6e670cc6177a157ea6eeabb7?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Udbn7ByPerC39c6x0m~vvK~JoxulQnIURRh2lJnGc3KYYXN576LMCnppDZWPNMADzrfENkhommh4WZrIHU~u8StOZS8g0-r~vko28UUo8gwcrEiN8HIyqzeER2~wH5lYQjNuwq6GwuK3hZKmqQ0nGX~wMY~12o6~BZBGe9EOJx3yjt6oiZ7zhlw-GxYjANsLVbFXcyC99pTTRf5DJNoCsW06TYeJlbqZHLNMwLEXEoEux2RjaCNgCfy1YHt9PD7gXqa9VN-b2oMYVWTGJdgE2Qi0rcdja~0u0Asyh8X4oseji894eLeQC2hl3AhHSVMti9dRnIl1x3qfTbmhOo0GYA__",
    name: "Corey Schleifer",
    date: "Nov 14 2023",
    amount: "$87,000",
    status: "Paid",
  },
  {
    id: 4,
    img: "https://s3-alpha-sig.figma.com/img/cd20/7cb7/6983d013fc86854863e2ef7e5cad02f8?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jgHAxJs968Y~UZFuD7nvJEsChdnVEdAdIrgsOyPH6HhFN2HyC2BpQ8na13UE2rkF9m-bxkGFs5GPLJVP7shnJ6RREMrFMYfSG4f5G~RdgW8UfnBUhyLElur2pP7l5Q7y37JX672N3Onj125DUIg2ViDWpOF1rC5TXB2ezE78l73XQq5dd8EyyBcxLOX568sJQhf1DkUJqsJj2Wqg2aCFqhhjSvoBAiscGla1-XW1jW8AfSdRAUudGEUo1nvsnk59tcTqJAZK1wwlmk~ja0yF8tQcEFpMTUqa8VgIdqkQT0tOCrwcx5rlQhDoitkhDY~wROpAPX15Fka8VXmiatrozg__",
    name: "Cooper Press",
    date: "Nov 14 2023",
    amount: "$100,000",
    status: "Paid",
  },
  {
    id: 5,
    img: "https://s3-alpha-sig.figma.com/img/f9e6/5870/a9caf38791170e945adeacba41c1437d?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HdksHQxHM~tb8Nnxekxp8FA-Emwqld7ZqMiyMkrVTy1n4Ad75A-ltzWCZqKKhP~VYr04R471eq6GvGG68UmlCshQ6HbyM-BPMQWJ9lwnm5qXYR6RHZBWfzfM9wrxc1uGUZSzDsdh1nSHzPJKK6kKOGeaBP14dgTdow2N5sMs1cc5ZfVOfZWUeXPKh2vjZ0i3hKTWU6OyiQ7OI2dH49XcNYZKOFYcws-JAWL8-EVFuIwanVMnJaxUQkxZQizEI3Q7Yr~HbXnI~YxHUNQWjOEe5lXQ8Xvhp~G2PRKc07vFPJDR-HIXuGNmJ9cOnt1A~6RXtHAI13xCWjnkXuuT87EHSw__",
    name: "Phillip Lubin",
    date: "Nov 13 2023",
    amount: "$78,000",
    status: "Refund",
  },
];

const Orders = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={`xl:col-span-7 col-span-12 px-5 py-[1.13rem] border border-solid ${
        resolvedTheme === "dark" ? "bg-transparent" : "bg-white"
      } border-[#edf2f7] rounded-[0.875rem] min-h-[26.357rem]`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-analytics-dark text-lg font-semibold">
          Last Orders
        </h2>
        <button className="text-analytics-green text-lg font-medium text-center">
          See All
        </button>
      </div>
      <div className="mt-[0.88rem]">
        <div className="text-[#9ca4ab] font-medium grid grid-cols-12">
          <div className="col-span-3">Name</div>
          <div className="col-span-3">Date</div>
          <div className="col-span-2">Amount</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2">Invoice</div>
        </div>
        <div className="mt-5">
          {data.map((order) => (
            <div
              key={order.id}
              className="grid grid-cols-12 border-t border-t-solid border-t-[#edf2f6] gap-3 pt-3 pb-4"
            >
              <div className="col-span-3 flex items-center gap-[0.625rem]">
                <div className="rounded-[1.1875rem] overflow-hidden relative w-8 h-8 md:block hidden">
                  <Image
                    src={order.img}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p
                  className={`${
                    resolvedTheme === "dark"
                      ? "text-white"
                      : "text-analytics-dark-2"
                  } font-medium md:text-base text-sm`}
                >
                  {order.name}
                </p>
              </div>
              <div
                className={`col-span-3 ${
                  resolvedTheme === "dark" ? "text-white" : "text-[#737373]"
                } md:text-base text-sm`}
              >
                {order.date}
              </div>
              <div
                className={`col-span-2 ${
                  resolvedTheme === "dark"
                    ? "text-white"
                    : "text-analytics-dark-3"
                } font-medium md:text-base text-sm`}
              >
                {order.amount}
              </div>
              <div
                className={`col-span-2 text-sm ${
                  resolvedTheme === "dark"
                    ? "text-white"
                    : "text-analytics-dark-3"
                } md:text-base`}
              >
                {order.status}
              </div>
              <div className="col-span-2 md:text-base text-sm">
                <p>View</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
