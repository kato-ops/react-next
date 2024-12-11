import styles from "./Spreadsheet.module.css"

export default function Spreadsheet() {
  return (
    <div className={styles.container}>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>A</th>
            <th>B</th>
            <th>C</th>
          </tr>
          <tr>
            <th>1</th>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <th>2</th>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
          <tr>
            <th>3</th>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}