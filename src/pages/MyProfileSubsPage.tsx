import Card from "../components/cards/Card";
import "../styles/OtclickandSubs.scss";
type Props = {};
const DATA_VACAN = [
  {
    title: "Дизайнер корпусной мебели",
    company: "ОсОО Flagman Print",
    graph: "FullTime",
    time: "Сегодня",
    key: 1,
  },
  {
    title: "Middle Java Backend Разработчик",
    company: "Makers",
    graph: "PartTime",
    time: "Сегодня",
    key: 2,
  },
  {
    title: "Менеджер по продажам в строительный магазин",
    company: "ZEINE interiors",
    graph: "FullTime",
    time: "Сегодня",
    key: 3,
  },
  {
    title: "Дизайнер корпусной мебели",
    company: "ОсОО Flagman Print",
    graph: "FullTime",
    time: "Сегодня",
    key: 4,
  },
  {
    title: "Дизайнер корпусной мебели",
    company: "ОсОО Flagman Print",
    graph: "FullTime",
    time: "Сегодня",
    key: 5,
  },
  {
    title: "Middle Java Backend Разработчик",
    company: "Makers",
    graph: "PartTime",
    time: "Сегодня",
    key: 6,
  },
  {
    title: "Менеджер по продажам в строительный магазин",
    company: "ZEINE interiors",
    graph: "FullTime",
    time: "Сегодня",
    key: 7,
  },
  {
    title: "Дизайнер корпусной мебели",
    company: "ОсОО Flagman Print",
    graph: "FullTime",
    time: "Сегодня",
    key: 8,
  },
  {
    title: "Дизайнер корпусной мебели",
    company: "ОсОО Flagman Print",
    graph: "FullTime",
    time: "Сегодня",
    key: 9,
  },
  {
    title: "Middle Java Backend Разработчик",
    company: "Makers",
    graph: "PartTime",
    time: "Сегодня",
    key: 10,
  },
  {
    title: "Менеджер по продажам в строительный магазин",
    company: "ZEINE interiors",
    graph: "FullTime",
    time: "Сегодня",
    key: 11,
  },
  {
    title: "Дизайнер корпусной мебели",
    company: "ОсОО Flagman Print",
    graph: "FullTime",
    time: "Сегодня",
    key: 12,
  },
  {
    title: "Дизайнер корпусной мебели",
    company: "ОсОО Flagman Print",
    graph: "FullTime",
    time: "Сегодня",
    key: 13,
  },
];

const MyProfileSubsPage = (_props: Props) => {
  return (
    <div className="mainBlock_otlick">
      {DATA_VACAN.map((item: any) => (
        <Card
          key={item.key}
          id={item.id}
          title={item.title}
          company_name={item.company_name}
          type_vacation={item.type_vacation}
          created_at={item.created_at}
        />
      ))}
    </div>
  );
};

export default MyProfileSubsPage;
