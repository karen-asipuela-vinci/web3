// classe pour afficher une ligne avec une statistique
export default function StatisticLine({ text, value }) {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    );
};