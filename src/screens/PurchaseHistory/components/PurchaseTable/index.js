import React from 'react'
import { DataTable } from 'react-native-paper'
import { ScrollView, Text } from 'react-native'
import { styles } from '../../styles'

const PurchaseTable = ({ history, boardPlusOnly = false }) => (
  <>
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Date</DataTable.Title>
        <DataTable.Title style={{ flex: 3 }}>Location</DataTable.Title>
        <DataTable.Title>Price</DataTable.Title>
        {!boardPlusOnly && <DataTable.Title style={{ flex: 2 }}>Method</DataTable.Title>}
      </DataTable.Header>
    </DataTable>
    <ScrollView vertical style={styles.scroll}>
      <DataTable>
        {history.map(h => (
          <DataTable.Row key={h.id}>
            <DataTable.Cell>
              <Text style={styles.date}>
                {(new Date(h.purchaseDate)).toLocaleString([], { dateStyle: 'short' })}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell style={{ flex: 3 }}>
              <Text style={styles.dataText}>
                {h.locationName}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell>
              <Text style={styles.dataText}>{`$${h.amount}`}</Text>
            </DataTable.Cell>
            {!boardPlusOnly && (
            <DataTable.Cell style={{ flex: 2 }}>
              <Text style={styles.dataText}>
                {h.paymentMethod}
              </Text>
            </DataTable.Cell>
            )}
          </DataTable.Row>
        ))}
      </DataTable>
    </ScrollView>
  </>
)

export default PurchaseTable
