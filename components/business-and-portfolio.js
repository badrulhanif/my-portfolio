import BusinessItems from "./business-items";

function BusinessAndPortfolio() {
  const data = [
    {
      id: 1,
      question: "GTFOL",
      answer:
        "Unfortunately, it is still on localhost at the moment. Refer to my repo above for more open-source projects.",
    },
    {
      id: 2,
      question: "NFT Collections",
      answer: (
        <ul>
          <li className="hover:text-pink-400">
            <a
              href="https://app.pentas.io/user/fancyfoxclub"
              target="_blank"
              rel="noreferrer"
            >
              Fancy Fox Club
            </a>
          </li>
          <li className="hover:text-pink-400">
            <a
              href="https://app.pentas.io/user/0xpachio"
              target="_blank"
              rel="noreferrer"
            >
              Pentas
            </a>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="grid gap-3.5 mt-2.5">
      {data.map((data) => {
        return (
          <div>
            <BusinessItems key={data.id} title={data.question}>
              Unfortunately, it is still on localhost at the moment. Refer to my
              repo above for more open-source projects.
            </BusinessItems>
            <BusinessItems key={data.id} title={data.question}>
              <ul>
                <li className="hover:text-pink-400">
                  <a
                    href="https://app.pentas.io/user/fancyfoxclub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fancy Fox Club
                  </a>
                </li>
                <li className="hover:text-pink-400">
                  <a
                    href="https://app.pentas.io/user/0xpachio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pentas
                  </a>
                </li>
              </ul>
            </BusinessItems>
          </div>
        );
      })}
    </div>
  );
}

export default BusinessAndPortfolio;
