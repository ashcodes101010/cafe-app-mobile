import React from 'react'
import { DataTable } from 'react-native-paper'
import { ScrollView } from 'react-native'
import {
  styles,
} from './styles'

const PurchaseHistory = () => (
  <ScrollView vertical style={styles.scroll}>
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Date</DataTable.Title>
        <DataTable.Title style={{ flex: 3 }}>Location</DataTable.Title>
        <DataTable.Title>Price</DataTable.Title>
        <DataTable.Title style={{ flex: 2 }}>Method</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>1/24</DataTable.Cell>
        <DataTable.Cell style={{ flex: 3 }}>Cafe Gato Rojo</DataTable.Cell>
        <DataTable.Cell>$5</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>BoardPlus</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>2/1</DataTable.Cell>
        <DataTable.Cell style={{ flex: 3 }}>SEC Cafe</DataTable.Cell>
        <DataTable.Cell>$10</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>Crimson Cash</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>2/1</DataTable.Cell>
        <DataTable.Cell style={{ flex: 3 }}>SEC Cafe</DataTable.Cell>
        <DataTable.Cell>$10</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>Crimson Cash</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>2/1</DataTable.Cell>
        <DataTable.Cell style={{ flex: 3 }}>SEC Cafe</DataTable.Cell>
        <DataTable.Cell>$10</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>Crimson Cash</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>2/1</DataTable.Cell>
        <DataTable.Cell style={{ flex: 3 }}>SEC Cafe</DataTable.Cell>
        <DataTable.Cell>$10</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>Crimson Cash</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>2/1</DataTable.Cell>
        <DataTable.Cell style={{ flex: 3 }}>SEC Cafe</DataTable.Cell>
        <DataTable.Cell>$10</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>Crimson Cash</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>2/1</DataTable.Cell>
        <DataTable.Cell style={{ flex: 3 }}>SEC Cafe</DataTable.Cell>
        <DataTable.Cell>$10</DataTable.Cell>
        <DataTable.Cell style={{ flex: 2 }}>Crimson Cash</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  </ScrollView>
)

export default PurchaseHistory
