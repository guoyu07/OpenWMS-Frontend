import { InventoryComponent } from './inventory.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { InboundFormComponent } from './inbound-form/inbound-form.component';
import { OutFormComponent } from './out-form/out-form.component';
import { OutboundTableComponent } from './outbound-table/outbound-table.component';
import { ShiftFormComponent } from './shift-form/shift-form.component';
import { ShiftWarehouseTableComponent } from './shift-warehouse-table/shift-warehouse-table.component';
import { LossTableComponent } from './loss-table/loss-table.component';
import { LossFormComponent } from './loss-form/loss-form.component';
import { InventoryItemFormComponent } from './inventory-item-form/inventory-item-form.component';
import { InboundReceiptTableComponent } from './inbound-receipt-table/inbound-receipt-table.component';
import { InboundReceiptDetailComponent } from './inbound-receipt-detail/inbound-receipt-detail.component';

export const inventoryRoutes = [{
	path: '',
	component: InventoryComponent,
	children: [
		{ path: '', redirectTo: 'inventorytable/page/1', pathMatch: 'full' },
		{ path: 'inventory-table/page/:page', component: InventoryTableComponent },
		{ path: 'inventory-item-form', component: InventoryItemFormComponent },
		{ path: 'inbound-form', component: InboundFormComponent },
		{ path: 'inbound-receipt-table/page/:page', component: InboundReceiptTableComponent },
		{ path: 'inbound-receipt-detail/receipt-no/:receipt-no', component: InboundReceiptDetailComponent },
		{ path: 'out-form', component: OutFormComponent },
		{ path: 'outbound-table/page/:page', component: OutboundTableComponent },
		{ path: 'shift-form', component: ShiftFormComponent },
		{ path: 'shift-table/page/:page', component: ShiftWarehouseTableComponent },
		{ path: 'loss-form', component: LossFormComponent },
		{ path: 'loss-table/page/:page', component: LossTableComponent }
	]
}];
