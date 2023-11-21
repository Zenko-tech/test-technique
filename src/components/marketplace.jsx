
import styles from "@/style/marketplace.module.scss";

export default function Home() {
  // Profile Card
  const userData = {
    image: "IMAGE",
    rank: "First Class",
    username: "Shushi_17",
    name: "Joseph Felix",
    id: "BHV-902-BSW-9383",
  };

  // Balance Card
  const balanceData = {
    balance: 2000,
    coinName: "ZENKOIN",
    airdropDate: "24. 12.2025",
    pendingAirdrop: 1,
  };

  // Club Connection Card
  const clubConnectionData = {
    connectedPeople: ["user1", "user2", "user3"],
    communityAccess: ["Public", "First Class", "MAIA"],
  };

  // Asset Card
  const badgeCard = {
    badges: [{ item: "placeholder" }],
    ocsas: [
      { item: "placeholder" },
      { item: "placeholder" },
      { item: "placeholder" },
      { item: "placeholder" },
    ],
    licences: [{ item: "placeholder" }, { item: "placeholder" }],
  };

  // OCSA Card
  const ocsaConfig = {
    titles: [
      "ID",
      "Name",
      "Number",
      "Company",
      "Department",
      "Supply",
      "Stage",
      "Royalties",
    ],
    jsonArgs: [
      "id",
      "name",
      "number",
      "company",
      "department",
      "supply",
      "stage",
      "royalties",
    ],
    nbRowsByPage: 5,
  };
  const ocsaFakeDatas = [
    {
      id: "8937489301",
      name: "EFC750",
      number: "077",
      company: "Zenko",
      department: "Holding",
      supply: "750",
      stage: "1",
      royalties: "3%",
    },
    {
      id: "8937489302",
      name: "EFC750",
      number: "077",
      company: "Zenko",
      department: "Holding",
      supply: "750",
      stage: "1",
      royalties: "3%",
    },
    {
      id: "8937489303",
      name: "EFC750",
      number: "077",
      company: "Zenko",
      department: "Holding",
      supply: "750",
      stage: "1",
      royalties: "3%",
    },
    {
      id: "8937489304",
      name: "EFC750",
      number: "077",
      company: "Zenko",
      department: "Holding",
      supply: "750",
      stage: "1",
      royalties: "3%",
    },
    {
      id: "8937489305",
      name: "EFC750",
      number: "077",
      company: "Zenko",
      department: "Holding",
      supply: "750",
      stage: "1",
      royalties: "3%",
    },
    {
      id: "8937489306",
      name: "EFC750",
      number: "077",
      company: "Zenko",
      department: "Holding",
      supply: "750",
      stage: "1",
      royalties: "3%",
    },
    {
      id: "8937489307",
      name: "EFC750",
      number: "077",
      company: "Zenko",
      department: "Holding",
      supply: "750",
      stage: "1",
      royalties: "3%",
    },
  ];

  return (
    <main>
      <div className={styles.main}>

		Hi there, the page you have to code is there!
		you can code style in the file src/style/test.module.scss
		and you have a global.css file in src/app/global.css
</div>
    </main>
  );
}
