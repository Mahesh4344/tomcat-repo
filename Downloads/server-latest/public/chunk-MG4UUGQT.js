import {
  AlertMessageComponent,
  CommonModule,
  CommonService,
  DashboardScreen,
  DataService,
  DefaultValueAccessor,
  EnmModule,
  FormsModule,
  HeaderService,
  LabelService,
  MatDrawer,
  MatDrawerContainer,
  MatLegacyAnchor,
  MatLegacyButton,
  MatLegacyCard,
  MatLegacyCell,
  MatLegacyCellDef,
  MatLegacyCheckbox,
  MatLegacyColumnDef,
  MatLegacyFormField,
  MatLegacyHeaderCell,
  MatLegacyHeaderCellDef,
  MatLegacyHeaderRow,
  MatLegacyHeaderRowDef,
  MatLegacyInput,
  MatLegacyOption,
  MatLegacyPaginator,
  MatLegacyPrefix,
  MatLegacyRow,
  MatLegacyRowDef,
  MatLegacySelect,
  MatLegacyTable,
  MatLegacyTableDataSource,
  MatLegacyTooltip,
  MatModule,
  MatSort,
  MatSortHeader,
  MaxLengthValidator,
  NgClass,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgbModal,
  PatientService,
  ReactiveFormsModule,
  RouterModule,
  SidefilterService,
  SidemenuService,
  Subject,
  Title,
  UntypedFormBuilder,
  UntypedFormGroup,
  UserService,
  animate,
  debounceTime,
  distinctUntilChanged,
  state,
  style,
  transition,
  trigger,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction6,
  ɵɵpureFunctionV,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-X5ZGY5K2.js";

// src/app/modules/dos-page/dos.component.ts
var _c0 = (a0) => ({ "checkmark": a0 });
var _c1 = () => ["expandedDetail"];
var _c2 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) => ({ "dot-sst": a0, "dot-rtt": a1, "dot-urine": a2, "dot-btt": a3, "dot-feces": a4, "dot-grntt": a5, "dot-ltt": a6, "dot-Wtt": a7, "micro-msst": a8, "micro-mrtt": a9, "micro-mgrntt": a10, "micro-mltt": a11, "dot-grytt": a12, "dot-RBTT": a13 });
var _c3 = (a0) => ({ expandedall: a0 });
var _c4 = (a0, a1, a2, a3, a4, a5) => ({ dosskyBlue: a0, dosGreen: a1, dosorange: a2, dosequine: a3, dosBlue: a4, dosallother: a5 });
function DosComponent_mat_option_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const filter_r2 = ctx.$implicit;
    \u0275\u0275property("value", filter_r2.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(filter_r2.Name);
  }
}
function DosComponent_th_155_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Name, " ");
  }
}
function DosComponent_td_156_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275listener("click", function DosComponent_td_156_span_4_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const element_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.setClickedtrueRow(element_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "img", 93);
    \u0275\u0275elementEnd();
  }
}
function DosComponent_td_156_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275listener("click", function DosComponent_td_156_span_5_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const element_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.setClickedtrueRow(element_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "img", 94);
    \u0275\u0275elementEnd();
  }
}
function DosComponent_td_156_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 87)(1, "span", 88);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 45);
    \u0275\u0275template(4, DosComponent_td_156_span_4_Template, 2, 0, "span", 89)(5, DosComponent_td_156_span_5_Template, 2, 0, "span", 89);
    \u0275\u0275elementStart(6, "div", 90)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div")(10, "span", 91);
    \u0275\u0275text(11, "Test Code:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.label.Name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", element_r5.IsFavourite === true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", element_r5.IsFavourite === false);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(element_r5.TestName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", element_r5.OrderCode, "");
  }
}
function DosComponent_th_158_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Class, " ");
  }
}
function DosComponent_td_159_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 96)(1, "span", 88);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 97);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.label.Class);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", element_r7.Class, " ");
  }
}
function DosComponent_th_161_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.SampleRequirements, " ");
  }
}
function DosComponent_td_162_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 96)(1, "span", 98);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.label.SampleRequirements);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(element_r8.SampleRequirements);
  }
}
function DosComponent_th_164_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.TubeType, " ");
  }
}
function DosComponent_td_165_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 90)(2, "span", 100);
    \u0275\u0275element(3, "span", 101);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tube_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunctionV(2, _c2, [tube_r9.code === "SST", tube_r9.code === "RTT", tube_r9.code === "Urine", tube_r9.code === "BTT", tube_r9.code === "Feces", tube_r9.code === "GrnTT", tube_r9.code === "LTT", (tube_r9 == null ? null : tube_r9.code) === "WTT", (tube_r9 == null ? null : tube_r9.code) === "M-SST", (tube_r9 == null ? null : tube_r9.code) === "M-RTT", (tube_r9 == null ? null : tube_r9.code) === "M-GRNTT", (tube_r9 == null ? null : tube_r9.code) === "M-LTT", (tube_r9 == null ? null : tube_r9.code == null ? null : tube_r9.code.toUpperCase()) === "GRYTT", (tube_r9 == null ? null : tube_r9.code) === "RBTT"]));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tube_r9 == null ? null : tube_r9.code) == "GrnTT" ? "GRNTT" : tube_r9.code);
  }
}
function DosComponent_td_165_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 96)(1, "span", 88);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DosComponent_td_165_ng_container_3_Template, 5, 17, "ng-container", 99);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.label.TubeType);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", element_r10.TubeType);
  }
}
function DosComponent_th_167_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Tat, " ");
  }
}
function DosComponent_td_168_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 96)(1, "span", 88);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 102);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.label.Tat);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", element_r11.TAT, "");
  }
}
function DosComponent_th_170_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Price, " ");
  }
}
function DosComponent_th_170_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 103);
    \u0275\u0275template(1, DosComponent_th_170_span_1_Template, 2, 1, "span", 104);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isViewDOSPrice);
  }
}
function DosComponent_td_171_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r12.Price, " ");
  }
}
function DosComponent_td_171_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 96)(1, "span", 88);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DosComponent_td_171_span_3_Template, 2, 1, "span", 104);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.label.Price);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isViewDOSPrice);
  }
}
function DosComponent_th_173_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 103)(1, "button", 105);
    \u0275\u0275listener("click", function DosComponent_th_173_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle());
    });
    \u0275\u0275element(2, "img", 106);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c3, ctx_r2.allRowsExpanded));
  }
}
function DosComponent_td_174_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 107);
    \u0275\u0275element(1, "img", 108);
    \u0275\u0275elementEnd();
  }
}
function DosComponent_td_176_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 123);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const meth_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(meth_r14.methodology);
  }
}
function DosComponent_td_176_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 109)(1, "div", 110)(2, "div", 111)(3, "div", 112)(4, "div", 113)(5, "table", 114)(6, "tr", 115);
    \u0275\u0275element(7, "th");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "tr")(9, "td")(10, "div", 116)(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 88);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 117);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "td")(18, "div", 118)(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 88);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 119);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "td")(26, "div", 120)(27, "strong");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 88);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, DosComponent_td_176_span_31_Template, 2, 1, "span", 121);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(32, "td");
    \u0275\u0275elementStart(33, "td")(34, "div", 122)(35, "strong");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 88);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 119);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(41, "td")(42, "td");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("colspan", ctx_r2.columnsToDisplay.length);
    \u0275\u0275advance();
    \u0275\u0275property("@detailExpand", element_r15 === ctx_r2.expandedElement || ctx_r2.allRowsExpanded ? "expanded" : "collapsed");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction6(15, _c4, element_r15.Menu === "Blue", element_r15.Menu === "Green", element_r15.Menu === "Orange", element_r15.Menu === "Equine", element_r15.Menu === "AvianExotic", element_r15.Menu === "AllOther"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Component, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.label.Component);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", element_r15.Component, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Notes, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.label.Notes);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", element_r15.Notes, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Methodology, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.label.Methodology);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", element_r15.Methodologies);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Lab, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.label.Lab);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", element_r15.LabName, " ");
  }
}
function DosComponent_tr_177_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 124);
  }
}
function DosComponent_tr_178_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 125);
    \u0275\u0275listener("click", function DosComponent_tr_178_Template_tr_click_0_listener() {
      const element_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.expandCard(element_r17));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("example-expanded-row", ctx_r2.expandedElement === element_r17);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction6(3, _c4, element_r17.Menu === "Blue", element_r17.Menu === "Green", element_r17.Menu === "Orange", element_r17.Menu === "Equine", element_r17.Menu === "AvianExotic", element_r17.Menu === "AllOther"));
  }
}
function DosComponent_tr_179_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 126);
  }
}
function DosComponent_tbody_181_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tbody", 127)(1, "tr")(2, "td");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.label.Norecordsfound);
  }
}
var DosComponent = class _DosComponent {
  constructor(commonService, userService, fb, sidemenuService, headerService, patientService, labelService, dataService, modalService, title, sidefilterService) {
    this.commonService = commonService;
    this.userService = userService;
    this.fb = fb;
    this.sidemenuService = sidemenuService;
    this.headerService = headerService;
    this.patientService = patientService;
    this.labelService = labelService;
    this.dataService = dataService;
    this.modalService = modalService;
    this.title = title;
    this.sidefilterService = sidefilterService;
    this.dsDashboardScreen = new DashboardScreen();
    this.allRowsExpanded = false;
    this.isAdvSearched = false;
    this.isNotificationSelected = false;
    this.recordCount = 0;
    this.selectedBusinessId = localStorage.businessGuid != void 0 && localStorage.businessGuid != null && localStorage.businessGuid != "" ? parseInt(localStorage.businessGuid) : 0;
    this.columnsToDisplay = ["TestName", "Class", "SampleRequirements", "TubeType", "TAT", "Price", " "];
    this.dataSource = new MatLegacyTableDataSource();
    this.originData = [];
    this.dsAnalysisSource = [];
    this.active = true;
    this.proActive = false;
    this.checked = false;
    this.filterClassData = [];
    this.filterMenuData = [];
    this.isChecked = false;
    this.CheckForm = new UntypedFormGroup({});
    this.userId = localStorage.authDetails != void 0 ? JSON.parse(localStorage.authDetails).Id : void 0;
    this.SearchTestName = "Search by Test Name";
    this.searchValue = "";
    this.selectedMenu = null;
    this.selectedCass = null;
    this.isFavourite = false;
    this.start = 0;
    this.limit = 60;
    this.end = this.limit + this.start;
    this.selectedRowIndex = null;
    this.searchTextChanged = new Subject();
    this.authDetails = this.dataService.appData.authDetails;
    this.isBackOfficeUser = this.authDetails["BackOfficeFlag"];
    this.isViewDOSPrice = this.authDetails["IsViewDOSPrice"];
    this.sidemenuService.selectedModuleId = EnmModule.dos;
    this.labelService.getDosScreenLabels();
    this.label = this.labelService.dosScreen;
    this.title.setTitle("ZoetisDx | Directory of Services");
  }
  ngOnInit() {
    this.getDosTestData();
    if (localStorage.getItem("alert-popup") == "true") {
      this.modalService.open(AlertMessageComponent, {
        centered: true,
        backdrop: "static",
        scrollable: false
      });
    }
    this.getDosfilter();
    this.helpObj = this.dataService.appData.helpTopics.find((e) => e.HelpTopic == "Directory-of-Services");
  }
  ngAfterViewInit() {
    const tblContainer = document.getElementById("dos-datatbl");
    tblContainer.style.maxHeight = window.innerHeight - 200 + "px";
    this.searchTextChanged.pipe(debounceTime(1e3), distinctUntilChanged()).subscribe((data) => {
      this.searchValue = data;
      this.onDataSort();
      this.getDosTestData();
    });
  }
  onTypeChange() {
    if (this.searchValue != null && this.searchValue[this.searchValue.length - 1] != " ") {
      this.onDataSort();
      this.getDosTestData();
    }
  }
  getQuerytext(event) {
    this.searchTextChanged.next(event.target.value);
  }
  onTableScroll(e) {
    const tableViewHeight = e.target.offsetHeight;
    const tableScrollHeight = e.target.scrollHeight;
    const scrollLocation = e.target.scrollTop;
    const buffer = 200;
    const limit = tableScrollHeight - tableViewHeight - buffer;
    if (scrollLocation > limit) {
      if (this.end <= this.originData.length) {
        const data = this.getTableData(this.start, this.end);
        this.dataSource.data = this.dataSource.data.concat(data);
        this.updateIndex();
      } else {
        console.clear();
        const tpl = "background-color:greenyellow; border:3px solid orange; font-size:15px; font-weight: bold;padding:3px 5px;color:";
        console.log(`%cFOR QA TEAM ==> %cShowing ${this.originData.length} out of %c${this.originData.length} results`, `${tpl} magenta`, `${tpl} Red`, `${tpl} #4274fb`);
      }
    }
  }
  getTableData(start, end) {
    return this.originData.filter((value, index) => index >= start && index < end);
  }
  updateIndex() {
    console.clear();
    const showLim = this.end > this.originData.length ? this.originData.length : this.end;
    const tpl = "background-color:greenyellow; border:3px solid orange; font-size:15px; font-weight: bold;padding:3px 5px;color:";
    console.log(`%cFOR QA TEAM ==> %cShowing ${showLim} out of %c${this.originData.length} results`, `${tpl} magenta`, `${tpl} Red`, `${tpl} #4274fb`);
    this.start = this.end;
    this.end = this.limit + this.start;
  }
  onDataSort() {
    const scrollabe = document.getElementById("dos-datatbl");
    scrollabe.scrollTop = 0;
  }
  bindDataSource() {
    this.dataSource = new MatLegacyTableDataSource(this.originData.filter((value, index) => index >= this.start && index < this.end));
    this.updateIndex();
    this.dataSource.sortingDataAccessor = this.commonService.sortingDataAccessor;
    this.dataSource.sort = this.sort;
    this.recordCount = this.dataSource.data.length;
    if (this.recordCount > 0 && this.isNotificationSelected) {
      this.allRowsExpanded = true;
      this.isNotificationSelected = false;
    } else {
      this.allRowsExpanded = false;
    }
  }
  getDosfilter() {
    this.commonService.GetDOSFilterdetails().subscribe((data) => {
      this.filterClassData = data.ResponseData.Class;
      this.filterMenuData = data.ResponseData.Menu;
    });
  }
  setDefaultFilter() {
    this.selected = "Filter By Class";
    this.selectedMenu = "Filter By Menu";
    this.isAdvSearched = false;
  }
  toggle() {
    this.allRowsExpanded = !this.allRowsExpanded;
    this.expandedElement = null;
  }
  setClickedtrueRow(element) {
    this.selectedRow = element;
    this.dataSource.data.forEach((data) => {
      if (data.TestId == element.TestId) {
        data.IsFavourite = !data.IsFavourite;
      }
    });
    const fav = {
      TestId: element.TestId,
      UserGuid: this.dataService.appData.authDetails["UserGuid"],
      IsFavourite: element.IsFavourite
    };
    this.commonService.postFavourite(fav).subscribe(() => {
      this.expandedElement = null;
    });
  }
  searchDosTestData() {
    const dosfields = {
      SearchText: this.searchValue,
      IsOrder: false,
      UserGuid: this.headerService.loginUserGuid
    };
    this.commonService.GetDOSTestdata(dosfields).subscribe((data) => {
      this.originData = data.ResponseData.TestDetail;
      this.bindDataSource();
    }, (err) => {
      console.log(JSON.stringify(err));
      this.commonService.showCommonToastrError();
    });
  }
  getDosTestData(forceApiCall = false) {
    const dosfields = {
      IsOrder: false,
      UserGuid: this.authDetails["UserGuid"],
      SearchText: this.SearchTestName !== "Search by Test Name" && this.searchValue || "",
      SearchTestName: this.SearchTestName === "Search by Test Name" && this.searchValue || "",
      Menu: this.selectedMenu,
      ClassName: this.selectedCass,
      IsFavourite: this.isFavourite
    };
    let searchable = false;
    if (dosfields.SearchText || dosfields.Menu || dosfields.ClassName || dosfields.IsFavourite || dosfields.SearchTestName) {
      searchable = true;
    }
    if (forceApiCall || searchable || this.dataService.appData.dosCnf.dosDoRefresh || !this.dataService.appData.dosCnf.dosData.length) {
      this.commonService.GetDOSTestdata(dosfields).subscribe((data) => {
        this.originData = data.ResponseData.TestDetail;
        this.start = 0;
        this.limit = 60;
        this.end = this.limit + this.start;
        this.bindDataSource();
        if (this.originData && this.originData.length && !searchable) {
          this.dataService.appData.dosCnf.dosData = this.originData;
          this.dataService.appData.dosCnf.dosDoRefresh = false;
          this.dataService.data.next(this.dataService.appData);
        }
      });
      return;
    }
    this.originData = this.dataService.appData.dosCnf.dosData;
    this.start = 0;
    this.limit = 60;
    this.end = this.limit + this.start;
    this.bindDataSource();
  }
  onFilterChange(selectedField, event) {
    if (selectedField == "search") {
      this.selectedMenu = null;
      this.selectedCass = null;
      this.isFavourite = false;
    }
    if (selectedField == "menu") {
      this.selectedMenu = event.value;
    }
    if (selectedField == "class") {
      this.selectedCass = event.value;
    }
    if (selectedField == "favorites") {
      this.isFavourite = event.checked;
    }
    this.getDosTestData();
  }
  clraeAll() {
    this.searchValue = null;
    this.selectedMenu = null;
    this.selectedCass = null;
    this.isFavourite = false;
    this.getDosTestData(true);
    this.onDataSort();
  }
  expandCard(ele) {
    this.expandedElement = this.expandedElement === ele ? null : ele;
    gtag("event", "Directory_of_Services", {
      Total_Services_Visited: "",
      Total_Unique_Services_Clicked: "",
      Service_Name: ele.TestName,
      Service_Class: ele.Class,
      Sample_Requirements: ele.SampleRequirements,
      Tube_Type: ele.TubeType,
      TAT: ele["TAT"],
      Price: ele.Price,
      Component: ele.Component,
      Notes: ele.Notes,
      Methodology: ele.Methodologies,
      Lab: ele.LabName
    });
  }
  static {
    this.\u0275fac = function DosComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DosComponent)(\u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(SidemenuService), \u0275\u0275directiveInject(HeaderService), \u0275\u0275directiveInject(PatientService), \u0275\u0275directiveInject(LabelService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(SidefilterService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DosComponent, selectors: [["app-dos"]], viewQuery: function DosComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatLegacyPaginator, 7);
        \u0275\u0275viewQuery(MatSort, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      }
    }, decls: 182, vars: 25, consts: [["drawer", ""], ["selectedClass", ""], [1, "dos-con"], [1, "title-container", "icon-cont"], [1, "page-title"], ["src", "../../../assets/img/help-icon.svg", "matTooltip", "Help", "matTooltipPosition", "below", "matTooltipClass", "below", "alt", "help-circle", 1, "iconquestion", 3, "click"], ["hasBackdrop", "true", 1, "example-container1"], ["mode", "over", "position", "end", 1, "example-sidenav", "sidefilter", "right-filter"], [1, "example-sidenav-content", "w-100", "sidefilter", "dashboard"], [1, "p-0"], [1, "mt-0"], [1, "tbl-filter", "tblpart", "d-flex", "align-items-center"], [1, "fprt", "row", "m-0", "w-100", "justify-content-start", "align-items-center"], [1, "col-12", "col-md-9", "pl-0", "order-md-1", "order-2"], [1, "row", "m-0", "align-items-end"], [1, "col-12", "mt-2", "mt-md-0", "col-sm-6", "col-md-3", "pl-0", "pr-0"], ["appearance", "outline", "floatLabel", "always", 1, "dotpart"], [3, "ngModelChange", "ngModel"], ["value", "Search by Test Name", 3, "ngClass"], ["value", "Search all fields", 3, "ngClass"], [1, "col-12", "mt-2", "mt-md-0", "col-sm-6", "col-md-3", "pl-0", "pr-sm-3", "pr-0", "srchpart"], ["appearance", "outline", "floatLabel", "always"], ["matPrefix", "", 2, "cursor", "pointer", 3, "click"], ["src", "../../../../assets/img/search-icon.png", "alt", "search-icon"], ["type", "text", "matInput", "", "maxlength", "60", "placeholder", "Search", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "col-12", "mt-2", "mt-md-0", "col-sm-6", "col-md-3", "pl-0", "pr-sm-3", "pr-0"], [3, "valueChange", "value", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-12", "mt-2", "mt-md-0", "col-sm-6", "col-md-3", "pl-0", "pr-sm-3", "pr-0", "m-fav"], [1, "example-margin", 3, "ngModelChange", "valueChange", "change", "ngModel", "value"], [1, "clrall", "m-clrall", 3, "click"], [1, "col-12", "col-md-3", "sprt", "d-flex", "justify-content-end", "order-md-2", "order-1", "tblpartmain"], [1, "mr-4", "pt-2", "tblpartone"], [1, "clrall", 3, "click"], ["mat-raised-button", "", 1, "w-70", "g-btn", "mr-4", "tblpartone", 2, "order", "2", 3, "click"], ["mat-raised-button", "", "target", "_blank", 1, "w-70", "g-btn", "policy-btn", "tblpartone", 2, "order", "3", 3, "click"], [1, "d-flex", "justify-content-between", "my-2", "pl-3", "pr-3", "align-items-center", "toprow"], [1, "d-flex", "align-items-center", "tube_type_key", "mt-3"], [1, "tooltext"], [1, "tooltip"], ["src", "../../../assets/img/infos.svg", "alt", ""], [1, "tooltiptext"], [1, "tool_header"], [1, "tool_text", "p-3"], [1, "d-flex", "justify-content-start", "align-items-center", "mb-2"], [1, "d-flex"], [1, "dot"], [1, "abbre"], [1, "dot", "sst"], [1, "dot", "rrt"], [1, "dot", "ltt"], [1, "dot", "btt"], [1, "dot", "grntt"], [1, "dot", "wtto"], [1, "dot", "f"], [1, "dot", "u"], [1, "micro", "msst"], [1, "micro", "mrtt"], [1, "micro", "mltt"], [1, "micro", "mgrntt"], [1, "dot", "grytt"], [1, "dot", "rbtt"], [1, "p-0", "pt-3", "cust-postion"], [1, "example-container", "pt-0"], ["id", "dos-datatbl", 1, "usermangemt", 3, "scroll"], ["mat-table", "", "multiTemplateDataRows", "", "summary", "", "matSort", "", 1, "dashboard-table", "pt-4", 3, "dataSource"], ["matColumnDef", "TestName"], ["mat-header-cell", "", "style", "padding-left: 20px", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "id", "first_block", "class", "dosskyBlue", 4, "matCellDef"], ["matColumnDef", "Class"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "SampleRequirements"], ["matColumnDef", "TubeType"], ["matColumnDef", "TAT"], ["matColumnDef", "Price"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", " "], ["mat-cell", "", "id", "arrow_block", "class", "down-arrow", 4, "matCellDef"], ["matColumnDef", "expandedDetail"], ["id", "expanded_td", "mat-cell", "", "td", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "example-element-row pt-5 pb-4", 3, "ngClass", "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], ["class", "norecord", 4, "ngIf"], [3, "value"], ["mat-header-cell", "", "mat-sort-header", "", 2, "padding-left", "20px"], ["mat-cell", "", "id", "first_block", 1, "dosskyBlue"], [1, "textTtl", "d-none"], ["class", "mr-2 star_wrapper", 3, "click", 4, "ngIf"], [1, "d-flex", "flex-column"], [1, "mr-1"], [1, "mr-2", "star_wrapper", 3, "click"], ["src", "../../../assets/img/star.png", "alt", "star.png", "width", "18"], ["src", "../../../assets/img/unstar.png", "alt", "unstar.png", "width", "18"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "bluetext"], [1, "textTtl", "d-none", "sample-req-txt"], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "mb-1"], [3, "ngClass"], [1, "tat_text"], ["mat-header-cell", ""], [4, "ngIf"], ["mat-raised-button", "", 1, "closeall", 3, "click", "ngClass"], ["src", "../../../assets/img/expandall.png ", "alt", "expandall"], ["mat-cell", "", "id", "arrow_block", 1, "down-arrow"], ["src", "../../../assets/img/down-gray@2x.png", "alt", "down-gray"], ["id", "expanded_td", "mat-cell", "", "td", ""], [1, "example-element-detail"], [1, "row", "py-0", "card-block", "w-100"], [1, "d-flex", "w-100"], [1, "w-100"], ["id", "inner_table", "summary", "", 3, "ngClass"], [2, "display", "none"], [1, "d-flex", "pr-3", "flex-column", "two", "text-left", "pl-5", "comp"], [1, "comp_text", "desc_text"], [1, "d-flex", "pr-3", "flex-column", "three", "text-left", "notes_block"], [1, "desc_text"], [1, "d-flex", "pr-3", "flex-column", "four", "text-left"], ["class", "desc_textmethodology", 4, "ngFor", "ngForOf"], [1, "d-flex", "pr-3", "flex-column", "six", "text-left"], [1, "desc_textmethodology"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", "pt-5", "pb-4", 3, "click", "ngClass"], ["mat-row", "", 1, "example-detail-row"], [1, "norecord"]], template: function DosComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "section", 3)(2, "h5")(3, "span", 4);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "img", 5);
        \u0275\u0275listener("click", function DosComponent_Template_img_click_5_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.commonService.onlineHelp(ctx.helpObj.PageID));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "mat-drawer-container", 6);
        \u0275\u0275element(7, "mat-drawer", 7, 0);
        \u0275\u0275elementStart(9, "div", 8)(10, "mat-card", 9)(11, "div", 10)(12, "section", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "div", 15)(17, "mat-form-field", 16)(18, "mat-select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function DosComponent_Template_mat_select_ngModelChange_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.SearchTestName, $event) || (ctx.SearchTestName = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(19, "mat-option", 18);
        \u0275\u0275text(20, "Search by Test Name ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "mat-option", 19);
        \u0275\u0275text(22, "Search all Fields ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "div", 20)(24, "mat-form-field", 21)(25, "span", 22);
        \u0275\u0275listener("click", function DosComponent_Template_span_click_25_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.searchDosTestData());
        });
        \u0275\u0275element(26, "img", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "input", 24);
        \u0275\u0275twoWayListener("ngModelChange", function DosComponent_Template_input_ngModelChange_27_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.searchValue, $event) || (ctx.searchValue = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("keydown.enter", function DosComponent_Template_input_keydown_enter_27_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.getDosTestData(true));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 25)(29, "mat-form-field", 21)(30, "mat-select", 26, 1);
        \u0275\u0275twoWayListener("valueChange", function DosComponent_Template_mat_select_valueChange_30_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedCass, $event) || (ctx.selectedCass = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275template(32, DosComponent_mat_option_32_Template, 2, 2, "mat-option", 27);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "div", 28)(34, "mat-checkbox", 29);
        \u0275\u0275twoWayListener("ngModelChange", function DosComponent_Template_mat_checkbox_ngModelChange_34_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.isFavourite, $event) || (ctx.isFavourite = $event);
          return \u0275\u0275resetView($event);
        })("valueChange", function DosComponent_Template_mat_checkbox_valueChange_34_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.checked, $event) || (ctx.checked = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("change", function DosComponent_Template_mat_checkbox_change_34_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFilterChange("favorites", $event));
        });
        \u0275\u0275text(35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "a", 30);
        \u0275\u0275listener("click", function DosComponent_Template_a_click_36_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.clraeAll());
        });
        \u0275\u0275text(37);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(38, "div", 31)(39, "div", 32)(40, "a", 33);
        \u0275\u0275listener("click", function DosComponent_Template_a_click_40_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.clraeAll());
        });
        \u0275\u0275text(41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "button", 34);
        \u0275\u0275listener("click", function DosComponent_Template_button_click_42_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.getDosTestData(true));
        });
        \u0275\u0275text(43, " Search ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "a", 35);
        \u0275\u0275listener("click", function DosComponent_Template_a_click_44_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.commonService.onlineHelp(1044));
        });
        \u0275\u0275text(45, " ZRL Policies ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(46, "div", 36)(47, "span", 37)(48, "span", 38);
        \u0275\u0275text(49);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 39);
        \u0275\u0275element(51, "img", 40);
        \u0275\u0275elementStart(52, "div", 41)(53, "div", 42);
        \u0275\u0275text(54, " KEY ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 43)(56, "div", 44)(57, "div", 45);
        \u0275\u0275element(58, "span", 46);
        \u0275\u0275elementStart(59, "span", 47);
        \u0275\u0275text(60, "TAT:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "span");
        \u0275\u0275text(62, "Turnaround Time");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(63, "div", 44);
        \u0275\u0275element(64, "span", 48);
        \u0275\u0275elementStart(65, "div", 45)(66, "span", 47);
        \u0275\u0275text(67, "SST:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "span");
        \u0275\u0275text(69, "Serum Separator (Gel)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(70, "div", 44);
        \u0275\u0275element(71, "span", 49);
        \u0275\u0275elementStart(72, "div", 45)(73, "span", 47);
        \u0275\u0275text(74, "RTT:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "span");
        \u0275\u0275text(76, "Clot Activator (No Gel)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(77, "div", 44);
        \u0275\u0275element(78, "span", 50);
        \u0275\u0275elementStart(79, "div", 45)(80, "span", 47);
        \u0275\u0275text(81, "LTT:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "span");
        \u0275\u0275text(83, "K EDTA");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(84, "div", 44);
        \u0275\u0275element(85, "span", 51);
        \u0275\u0275elementStart(86, "div", 45)(87, "span", 47);
        \u0275\u0275text(88, "BTT:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "span");
        \u0275\u0275text(90, "Na Citrate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(91, "div", 44);
        \u0275\u0275element(92, "span", 52);
        \u0275\u0275elementStart(93, "div", 45)(94, "span", 47);
        \u0275\u0275text(95, "GRNTT:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "span");
        \u0275\u0275text(97, "Lithium Heparin");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(98, "div", 44);
        \u0275\u0275element(99, "span", 53);
        \u0275\u0275elementStart(100, "div", 45)(101, "span", 47);
        \u0275\u0275text(102, "WTT:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "span");
        \u0275\u0275text(104, "No Additive");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(105, "div", 44);
        \u0275\u0275element(106, "span", 54);
        \u0275\u0275elementStart(107, "div", 45)(108, "span", 47);
        \u0275\u0275text(109, "Feces");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(110, "div", 44);
        \u0275\u0275element(111, "span", 55);
        \u0275\u0275elementStart(112, "div", 45)(113, "span", 47);
        \u0275\u0275text(114, "Urine");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(115, "div", 44);
        \u0275\u0275element(116, "span", 56);
        \u0275\u0275elementStart(117, "div", 45)(118, "span", 47);
        \u0275\u0275text(119, "M-SST");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(120, "div", 44);
        \u0275\u0275element(121, "span", 57);
        \u0275\u0275elementStart(122, "div", 45)(123, "span", 47);
        \u0275\u0275text(124, "M-RTT");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(125, "div", 44);
        \u0275\u0275element(126, "span", 58);
        \u0275\u0275elementStart(127, "div", 45)(128, "span", 47);
        \u0275\u0275text(129, "M-LTT ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(130, "div", 44);
        \u0275\u0275element(131, "span", 59);
        \u0275\u0275elementStart(132, "div", 45)(133, "span", 47);
        \u0275\u0275text(134, "M-GRNTT");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(135, "div", 44);
        \u0275\u0275element(136, "span", 60);
        \u0275\u0275elementStart(137, "div", 45)(138, "span", 47);
        \u0275\u0275text(139, "GRYTT:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "span");
        \u0275\u0275text(141, "K Oxalate/Na Fluoride");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(142, "div", 44);
        \u0275\u0275element(143, "span", 61);
        \u0275\u0275elementStart(144, "div", 45)(145, "span", 47);
        \u0275\u0275text(146, "RBTT:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "span");
        \u0275\u0275text(148, "Na EDTA/Na Heparin");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(149, "div", 62)(150, "div")(151, "div", 63)(152, "div", 64);
        \u0275\u0275listener("scroll", function DosComponent_Template_div_scroll_152_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onTableScroll($event));
        });
        \u0275\u0275elementStart(153, "table", 65);
        \u0275\u0275elementContainerStart(154, 66);
        \u0275\u0275template(155, DosComponent_th_155_Template, 2, 1, "th", 67)(156, DosComponent_td_156_Template, 13, 5, "td", 68);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(157, 69);
        \u0275\u0275template(158, DosComponent_th_158_Template, 2, 1, "th", 70)(159, DosComponent_td_159_Template, 5, 2, "td", 71);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(160, 72);
        \u0275\u0275template(161, DosComponent_th_161_Template, 2, 1, "th", 70)(162, DosComponent_td_162_Template, 5, 2, "td", 71);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(163, 73);
        \u0275\u0275template(164, DosComponent_th_164_Template, 2, 1, "th", 70)(165, DosComponent_td_165_Template, 4, 2, "td", 71);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(166, 74);
        \u0275\u0275template(167, DosComponent_th_167_Template, 2, 1, "th", 70)(168, DosComponent_td_168_Template, 5, 2, "td", 71);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(169, 75);
        \u0275\u0275template(170, DosComponent_th_170_Template, 2, 1, "th", 76)(171, DosComponent_td_171_Template, 4, 2, "td", 71);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(172, 77);
        \u0275\u0275template(173, DosComponent_th_173_Template, 3, 3, "th", 76)(174, DosComponent_td_174_Template, 2, 0, "td", 78);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(175, 79);
        \u0275\u0275template(176, DosComponent_td_176_Template, 43, 22, "td", 80);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(177, DosComponent_tr_177_Template, 1, 0, "tr", 81)(178, DosComponent_tr_178_Template, 1, 10, "tr", 82)(179, DosComponent_tr_179_Template, 1, 0, "tr", 83);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "div");
        \u0275\u0275template(181, DosComponent_tbody_181_Template, 4, 1, "tbody", 84);
        \u0275\u0275elementEnd()()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.label.DirectoryOfServices);
        \u0275\u0275advance(14);
        \u0275\u0275twoWayProperty("ngModel", ctx.SearchTestName);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(20, _c0, ctx.SearchTestName === "Search by Test Name"));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(22, _c0, ctx.SearchTestName === "Search all fields"));
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchValue);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("value", ctx.selectedCass);
        \u0275\u0275property("placeholder", ctx.label.FilterByClass);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.filterClassData);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.isFavourite)("value", ctx.checked);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.label.Favorites, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.label.ClearAll);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.label.ClearAll);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", ctx.label.TubeTypeKey, "");
        \u0275\u0275advance(104);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(24);
        \u0275\u0275property("matHeaderRowDef", ctx.columnsToDisplay)("matHeaderRowDefSticky", true);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.columnsToDisplay);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(24, _c1));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.dataSource === null || ctx.dataSource.data.length === 0);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, MatLegacyFormField, MatLegacyPrefix, MatLegacyInput, MatLegacyButton, MatLegacyAnchor, MatLegacyCheckbox, MatLegacyCard, MatLegacySelect, MatLegacyOption, MatDrawer, MatDrawerContainer, MatLegacyTable, MatLegacyHeaderCellDef, MatLegacyHeaderRowDef, MatLegacyColumnDef, MatLegacyCellDef, MatLegacyRowDef, MatLegacyHeaderCell, MatLegacyCell, MatLegacyHeaderRow, MatLegacyRow, MatSort, MatSortHeader, MatLegacyTooltip, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ['\n\n.g-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fd6400;\n  border-color: #fd6400;\n}\n  .mat-tooltip {\n  background: white !important;\n  color: black !important;\n  border: 1px solid #ccc !important;\n}\n  .mat-tooltip.below {\n  overflow: initial;\n  margin-top: 1rem;\n}\n  .mat-tooltip.below:after {\n  top: -0.5rem;\n  right: calc(50% - 0.5rem);\n  transform: rotate(0);\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n}\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.btn-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, \n.btn-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, \n.show[_ngcontent-%COMP%]    > .btn-secondary.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fd6400;\n  border-color: #fd6400;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  min-width: 124px;\n}\n.btn-group-toggle[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #a1a1a1;\n  border-color: transparent;\n  border-radius: 5px !important;\n  padding: 5px 8px;\n  font-size: 13.5px;\n  font-weight: 400;\n}\n.example-container[_ngcontent-%COMP%] {\n  padding: 12px;\n  overflow: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.select-outer[_ngcontent-%COMP%] {\n  float: right;\n}\n.heading[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 400;\n}\n.color1[_ngcontent-%COMP%] {\n  background: #0eab1c;\n  height: 28px !important;\n  display: inline-block;\n  align-items: flex-end;\n  vertical-align: middle;\n  width: 5px;\n  margin-right: 17px;\n}\n.sort[_ngcontent-%COMP%] {\n  width: 170px;\n  float: right;\n  font-family: "GothamNarrowBold", sans-serif;\n  font-weight: bold;\n}\n.sort-text[_ngcontent-%COMP%] {\n  min-width: 70px;\n  font-size: 11px;\n  margin-right: 5px;\n  text-align: right;\n}\n.sort[_ngcontent-%COMP%]   .mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 1px 2px 6px 1px !important;\n  font-size: 12px;\n}\n.sort[_ngcontent-%COMP%]   .mat-raised-button.mat-warn[_ngcontent-%COMP%] {\n  background-color: #fd6400;\n}\n.right-filter[_ngcontent-%COMP%]   .mat-raised-button.mat-warn[_ngcontent-%COMP%] {\n  box-shadow: 0 0 6px 1px rgba(255, 100, 0, 0.29) !important;\n  background-color: #ff6400 !important;\n  min-width: 161px;\n}\n.any-src[_ngcontent-%COMP%] {\n  padding-right: 16px;\n  text-align: left;\n  white-space: nowrap;\n}\n.synch[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-right: 15px;\n  font-family: "GothamNarrowBold", sans-serif !important;\n}\n.all[_ngcontent-%COMP%] {\n  margin-left: 13px;\n  font-weight: bold;\n  font-size: 14px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.head1[_ngcontent-%COMP%] {\n  text-align: center !important;\n  font-size: 17px;\n  color: #000;\n}\n.patient-name[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #0075bc;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.example-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(2), \n.example-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(2).example-container   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(3), \n.example-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(3) {\n  min-width: 98px !important;\n}\n.imgouter[_ngcontent-%COMP%] {\n  width: 42px;\n  text-align: center;\n}\n.norecord[_ngcontent-%COMP%] {\n  width: 99.1% !important;\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  border: 1px solid #ccc9;\n  border-top: transparent;\n  background-color: #fbfbfb;\n}\ntd.mat-cell[_ngcontent-%COMP%]:last-of-type, \ntd.mat-footer-cell[_ngcontent-%COMP%]:last-of-type, \nth.mat-header-cell[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 23px;\n}\n.example-container[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, \n.example-container[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  max-width: 150px;\n  width: 45px;\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n  position: relative;\n  top: -12px;\n  box-shadow: 0 8px 12px 0 rgb(0 0 0 / 19%) !important;\n}\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n  padding: 12px 0;\n}\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  justify-content: space-around;\n}\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.card-complete[_ngcontent-%COMP%] {\n  border-left: 5px solid #0eab1c;\n}\n.completed[_ngcontent-%COMP%] {\n  border-left: 5px solid #0eab1c;\n}\n.pending[_ngcontent-%COMP%] {\n  border-left: 5px solid #969696;\n}\n.cancelled[_ngcontent-%COMP%] {\n  border-left: 5px solid red;\n}\n.mat-column-expandedDetail[_ngcontent-%COMP%] {\n  background: #f5f7f9;\n}\n.card-head[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: "GothamNarrowBold", sans-serif;\n  font-weight: bold;\n  width: 90%;\n  word-break: break-word;\n  white-space: break-spaces;\n  text-align: left;\n  line-height: 16px;\n}\n.card-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  min-width: 62px;\n  word-break: break-word;\n  white-space: normal;\n  text-align: left;\n  max-width: 75px;\n}\n.card-block[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  margin-bottom: 13px;\n  padding: 12px;\n  height: 100%;\n  border-radius: 5px !important;\n  padding-bottom: 0;\n}\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   img[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: rotate(-90deg);\n  transition: all 0.1s;\n  position: absolute;\n  top: 16px;\n  right: 12px;\n}\n.example-element-row.example-expanded-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   img[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: rotate(0deg);\n}\n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%]:nth-of-type(1), \n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%]:nth-of-type(2), \n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%]:nth-of-type(3) {\n  margin-bottom: 10px;\n}\n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.card-arrow[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #0072ce !important;\n}\n.dashboard-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-radius: 5px 0 0 0px !important;\n}\n.dashboard-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-radius: 0px 5px 0 0px !important;\n}\n.cdk-column-expandedDetail[_ngcontent-%COMP%] {\n  padding-right: 0 !important;\n}\n.dashboard-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, \ntr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 14px !important;\n}\n.dashboard-table[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.dashboard-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:nth-child(4n+1) {\n  background-color: #fbfbfb !important;\n}\n.noresult[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(1) {\n  font-family: "GothamNarrowBold", sans-serif;\n  font-size: 15px;\n  margin-top: 20px;\n}\n.noresult[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(2) {\n  font-size: 15px;\n  margin-top: 20px;\n  color: #3e3e3e;\n}\n.noresult[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #3e3e3e;\n}\n.noresult[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 18px;\n}\n.closeall[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(0deg);\n  transition: all 0.1s;\n}\n.closeall.expandedall[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(-180deg);\n}\n.closeall[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 999;\n  top: 36px;\n  right: 37px;\n  background: transparent;\n  min-width: 34px;\n  padding: 0;\n}\n.cust-postion[_ngcontent-%COMP%] {\n  position: relative;\n}\n.example-container1[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 0;\n}\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.dashboard-wrapper[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n}\n.ipadfiler[_ngcontent-%COMP%] {\n  display: none;\n}\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.dvn_name[_ngcontent-%COMP%] {\n  width: auto !important;\n}\n@media (max-width: 800px) {\n  .dashboard-wrapper[_ngcontent-%COMP%] {\n    padding-left: 12px !important;\n    padding-right: 12px !important;\n  }\n  .btn-secondary[_ngcontent-%COMP%] {\n    min-width: 106px;\n  }\n  .toprow[_ngcontent-%COMP%] {\n    flex-direction: row;\n    padding-right: 0 !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .example-sidenav[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .mat-card[_ngcontent-%COMP%] {\n    border-radius: 10px !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 48px;\n    padding: 0;\n    margin-left: 10px;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {\n  .dashboard-wrapper[_ngcontent-%COMP%] {\n    padding-left: 12px !important;\n    padding-right: 12px !important;\n  }\n  .btn-secondary[_ngcontent-%COMP%] {\n    min-width: 106px;\n  }\n  .toprow[_ngcontent-%COMP%] {\n    flex-direction: row;\n    padding-right: 0 !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .example-sidenav[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .mat-card[_ngcontent-%COMP%] {\n    border-radius: 10px !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 48px;\n    padding: 0;\n    margin-left: 10px;\n  }\n}\n.filter-txt[_ngcontent-%COMP%] {\n  position: relative;\n  height: 22px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.cros-btn[_ngcontent-%COMP%] {\n  position: relative;\n  right: 0;\n  top: 0;\n  height: 30px !important;\n  width: 30px;\n  margin-left: 6px;\n}\n.g-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fd6400;\n  border-color: #fd6400;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n}\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87);\n  margin-right: 10px;\n  margin-left: 10px;\n  box-shadow: 0 0 12px 0 rgb(0 0 0 / 19%) !important;\n  border-radius: 6px !important;\n  margin-bottom: 11px;\n}\n.mat-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.btn-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, \n.btn-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, \n.show[_ngcontent-%COMP%]    > .btn-secondary.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fd6400;\n  border-color: #fd6400;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  min-width: 124px;\n}\n.btn-group-toggle[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #a1a1a1;\n  border-color: transparent;\n  border-radius: 5px !important;\n  padding: 5px 8px;\n  font-size: 13.5px;\n  font-weight: 400;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.select-outer[_ngcontent-%COMP%] {\n  float: right;\n}\n.heading[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 400;\n}\n.color1[_ngcontent-%COMP%] {\n  background: #0eab1c;\n  height: 28px !important;\n  display: inline-block;\n  align-items: flex-end;\n  vertical-align: middle;\n  width: 5px;\n  margin-right: 17px;\n}\n.sort[_ngcontent-%COMP%] {\n  width: 170px;\n  float: right;\n  font-family: "GothamNarrowBold", sans-serif;\n  font-weight: bold;\n}\n.sort-text[_ngcontent-%COMP%] {\n  min-width: 70px;\n  font-size: 11px;\n  margin-right: 5px;\n  text-align: right;\n}\n.sort[_ngcontent-%COMP%]   .mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 1px 2px 6px 1px !important;\n  font-size: 12px;\n}\n.sort[_ngcontent-%COMP%]   .mat-raised-button.mat-warn[_ngcontent-%COMP%] {\n  background-color: #fd6400;\n}\n.right-filter[_ngcontent-%COMP%]   .mat-raised-button.mat-warn[_ngcontent-%COMP%] {\n  box-shadow: 0 0 6px 1px rgba(255, 100, 0, 0.29) !important;\n  background-color: #ff6400 !important;\n  min-width: 161px;\n}\n.any-src[_ngcontent-%COMP%] {\n  padding-right: 16px;\n  text-align: left;\n  white-space: nowrap;\n}\n.synch[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-right: 15px;\n  font-family: "GothamNarrowBold", sans-serif !important;\n}\n.all[_ngcontent-%COMP%] {\n  margin-left: 13px;\n  font-weight: bold;\n  font-size: 14px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.head1[_ngcontent-%COMP%] {\n  text-align: center !important;\n  font-size: 17px;\n  color: #000;\n}\n.patient-name[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #0075bc;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.example-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(2), \n.example-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(2).example-container   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(3), \n.example-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(3) {\n  min-width: 98px !important;\n}\n.imgouter[_ngcontent-%COMP%] {\n  width: 42px;\n  text-align: center;\n}\n.norecord[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  border: 1px solid #ccc9;\n  border-top: transparent;\n  background-color: #fbfbfb;\n}\ntd.mat-cell[_ngcontent-%COMP%]:last-of-type, \ntd.mat-footer-cell[_ngcontent-%COMP%]:last-of-type, \nth.mat-header-cell[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 23px;\n}\n.example-container[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, \n.example-container[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  max-width: 150px;\n  width: 45px;\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n}\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.card-complete[_ngcontent-%COMP%] {\n  border-left: 5px solid #0eab1c;\n}\n.completed[_ngcontent-%COMP%] {\n  border-left: 5px solid #0eab1c;\n}\n.pending[_ngcontent-%COMP%] {\n  border-left: 5px solid #969696;\n}\n.cancelled[_ngcontent-%COMP%] {\n  border-left: 5px solid red;\n}\n.mat-column-expandedDetail[_ngcontent-%COMP%] {\n  background: #f5f7f9;\n}\n.card-head[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: "GothamNarrowBold", sans-serif;\n  font-weight: bold;\n  width: 90%;\n  word-break: break-word;\n  white-space: break-spaces;\n  text-align: left;\n  line-height: 16px;\n}\n.card-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  min-width: 62px;\n  word-break: break-word;\n  white-space: normal;\n  text-align: left;\n  max-width: 75px;\n}\n.card-block[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  margin-bottom: 13px;\n  padding: 12px;\n  height: 100%;\n  border-radius: 5px !important;\n  padding-bottom: 0;\n}\n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%]:nth-of-type(1), \n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%]:nth-of-type(2), \n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%]:nth-of-type(3) {\n  margin-bottom: 10px;\n}\n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.card-arrow[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #0072ce !important;\n}\n.dashboard-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-radius: 5px 0 0 0px !important;\n}\n.dashboard-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-radius: 0px 5px 0 0px !important;\n}\n.cdk-column-expandedDetail[_ngcontent-%COMP%] {\n  padding-right: 0 !important;\n}\n.dashboard-table[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.dashboard-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:nth-child(4n+1) {\n  background-color: #fbfbfb !important;\n}\n.noresult[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(1) {\n  font-family: "GothamNarrowBold", sans-serif;\n  font-size: 15px;\n  margin-top: 20px;\n}\n.noresult[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(2) {\n  font-size: 15px;\n  margin-top: 20px;\n  color: #3e3e3e;\n}\n.noresult[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #3e3e3e;\n}\n.noresult[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 18px;\n}\n.closeall[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(0deg);\n  transition: all 0.1s;\n}\n.closeall.expandedall[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(-180deg);\n}\n.closeall[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 999;\n  top: 4px;\n  right: 6px;\n  background: transparent;\n  min-width: 34px;\n  padding: 0;\n}\n.cust-postion[_ngcontent-%COMP%] {\n  position: relative;\n}\n.example-container1[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 0;\n}\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.dashboard-wrapper[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n}\n.ipadfiler[_ngcontent-%COMP%] {\n  display: none;\n}\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.dvn_name[_ngcontent-%COMP%] {\n  width: auto !important;\n}\n@media (max-width: 800px) {\n  .dashboard-wrapper[_ngcontent-%COMP%] {\n    padding-left: 12px !important;\n    padding-right: 12px !important;\n  }\n  .btn-secondary[_ngcontent-%COMP%] {\n    min-width: 106px;\n  }\n  .toprow[_ngcontent-%COMP%] {\n    flex-direction: row;\n    padding-right: 0 !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .example-sidenav[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .mat-card[_ngcontent-%COMP%] {\n    border-radius: 10px !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 48px;\n    padding: 0;\n    margin-left: 10px;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {\n  .dashboard-wrapper[_ngcontent-%COMP%] {\n    padding-left: 12px !important;\n    padding-right: 12px !important;\n  }\n  .btn-secondary[_ngcontent-%COMP%] {\n    min-width: 106px;\n  }\n  .toprow[_ngcontent-%COMP%] {\n    flex-direction: row;\n    padding-right: 0 !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .example-sidenav[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .mat-card[_ngcontent-%COMP%] {\n    border-radius: 10px !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 48px;\n    padding: 0;\n    margin-left: 10px;\n  }\n}\n.filter-txt[_ngcontent-%COMP%] {\n  position: relative;\n  height: 22px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.cros-btn[_ngcontent-%COMP%] {\n  position: relative;\n  right: 0;\n  top: 0;\n  height: 30px !important;\n  width: 30px;\n  margin-left: 6px;\n}\n.example-action-buttons[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], \n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.heading_bar[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #ed8b00;\n  color: #fff;\n  padding: 8px 10px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.heading_bar[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  width: 60px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  min-width: 290px;\n  padding-right: 12px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 250px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  width: 305px;\n  padding-right: 17px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n  width: 200px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n  width: 100px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\n  width: 120px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(7) {\n  width: 100px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\ntd[_ngcontent-%COMP%] {\n  font-family: "gothambook", sans-serif;\n  vertical-align: top;\n}\nth[_ngcontent-%COMP%] {\n  font-family: "GothamNarrowBold", sans-serif !important;\n  font-weight: 100;\n}\n.heading_bar[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.dot-sst[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  border: 4px solid #d91c00;\n}\n.dot-rtt[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #d91c00;\n}\n.dot-urine[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #fed504;\n}\n.dot-btt[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #a0dcee;\n}\n.dot-ltt[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #a884bb;\n}\n.dot-grntt[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #31b44a;\n}\n.dot-Wtt[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  border: 2px solid #BBBBBB;\n}\n.dot-feces[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #a36510;\n}\n.dot-grytt[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #808285;\n}\n.dot-RBTT[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #0097D4;\n}\n.dot[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n}\n.dred[_ngcontent-%COMP%] {\n  background: red;\n}\n.dgreen[_ngcontent-%COMP%] {\n  background: green;\n}\n.dred_circle[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid red;\n}\n.mat-accordion[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 216px);\n  overflow: auto;\n}\n.tooltip[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  font-size: 13px;\n  opacity: 1;\n}\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 370px;\n  background-color: #fff;\n  color: #000;\n  text-align: center;\n  border-radius: 6px;\n  padding: 0;\n  position: absolute;\n  z-index: 1;\n  top: -5px;\n  right: 110%;\n  box-shadow: 0 0 12px 0 rgb(0 0 0 / 19%) !important;\n}\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.tool_header[_ngcontent-%COMP%] {\n  background: #0072ce;\n  padding: 16px 0;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  color: #fff;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.tool_text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.abbre[_ngcontent-%COMP%] {\n  font-family: "GothamNarrowBold", sans-serif;\n  display: inline-block;\n  text-align: left;\n  padding-left: 3px;\n  padding-right: 4px;\n}\n.filter-head[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-family: "GothamNarrowBold", sans-serif;\n  color: #585858;\n  margin-bottom: 12px;\n}\n.clrall[_ngcontent-%COMP%] {\n  color: #0072ce !important;\n  font-family: "GothamNarrowBold", sans-serif;\n  cursor: pointer;\n  font-weight: bold;\n  text-decoration: underline;\n}\n.do_srch[_ngcontent-%COMP%] {\n  background: url("./media/search-icon.png");\n  background-repeat: no-repeat;\n  background-size: 15px;\n  padding-left: 24px;\n}\n.do_filter_wrapper[_ngcontent-%COMP%] {\n  height: calc(100vh - 119px);\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n}\n.del_doc[_ngcontent-%COMP%] {\n  font-family: "gothambook", sans-serif;\n}\n.sst[_ngcontent-%COMP%] {\n  border: 3px solid #d91c00;\n}\n.rrt[_ngcontent-%COMP%] {\n  background: #d91c00;\n}\n.ltt[_ngcontent-%COMP%] {\n  background: #a884bb;\n}\n.btt[_ngcontent-%COMP%] {\n  background: #a0dcee;\n}\n.grntt[_ngcontent-%COMP%] {\n  background: #31b44a;\n}\n.f[_ngcontent-%COMP%] {\n  background: #a36510;\n}\n.u[_ngcontent-%COMP%] {\n  background: #fed504;\n}\n.micro[_ngcontent-%COMP%] {\n  min-height: 16px;\n  min-width: 16px;\n  margin-right: 5px;\n}\n.micro-msst[_ngcontent-%COMP%] {\n  min-height: 16px;\n  min-width: 16px;\n  margin-right: 5px;\n  background: #fff;\n  border: 3px solid #ff0000;\n}\n.micro-mrtt[_ngcontent-%COMP%] {\n  min-height: 16px;\n  min-width: 16px;\n  margin-right: 5px;\n  background: #d91c00;\n}\n.micro-mltt[_ngcontent-%COMP%] {\n  min-height: 16px;\n  min-width: 16px;\n  margin-right: 5px;\n  background: #a884bb;\n}\n.micro-mgrntt[_ngcontent-%COMP%] {\n  min-height: 16px;\n  min-width: 16px;\n  margin-right: 5px;\n  background: #31b44a;\n}\n.msst[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 3px solid #ff0000;\n}\n.mrtt[_ngcontent-%COMP%] {\n  background: #d91c00;\n}\n.mltt[_ngcontent-%COMP%] {\n  background: #a884bb;\n}\n.mgrntt[_ngcontent-%COMP%] {\n  background: #31b44a;\n}\n.grytt[_ngcontent-%COMP%] {\n  background: #808285;\n}\n.rbtt[_ngcontent-%COMP%] {\n  background: #0097D4;\n}\n.wtto[_ngcontent-%COMP%] {\n  border: 2px solid #BBBBBB;\n}\n.tooltext[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100px;\n  right: 27px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n}\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.tat_text[_ngcontent-%COMP%] {\n  width: 130px;\n  word-wrap: break-word;\n  white-space: normal;\n  display: block;\n  line-height: 15px;\n}\n.desc_text[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  white-space: normal;\n  display: block;\n  line-height: 15px;\n  min-height: 30px;\n}\n.desc_textmethodology[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  white-space: normal;\n  display: block;\n  min-height: 30px;\n  margin: 0px 0px 6px 0px;\n}\n.desc_textmethodology[_ngcontent-%COMP%]:last-child {\n  margin: 0px !important;\n}\n.usermangemt[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 262px) !important;\n  height: calc(100vh - 260px);\n  overflow: auto;\n  padding: 0 12px;\n  padding-left: 5px;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.select-outer[_ngcontent-%COMP%] {\n  float: right;\n}\n.heading[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  font-family: "GothamNarrowBold", sans-serif;\n  font-weight: bold;\n}\n.color1[_ngcontent-%COMP%] {\n  background: red;\n  height: 34px !important;\n  display: inline-block;\n  align-items: flex-end;\n  vertical-align: middle;\n}\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n.links[_ngcontent-%COMP%] {\n  color: #0075bc;\n  cursor: pointer !important;\n  text-decoration: underline;\n}\n.adduser-btn[_ngcontent-%COMP%] {\n  background-color: #ff6400 !important;\n  color: #fff !important;\n  height: 34px !important;\n  padding: 0px 30px !important;\n  border-radius: 6px !important;\n  line-height: 34px;\n}\n.view-user[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  flex: auto;\n  min-width: 0;\n  width: 115px;\n}\n.view-user[_ngcontent-%COMP%]   .mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 4px 6px 7px 4px;\n  margin: 0 !important;\n  top: -2px;\n  font-size: 14px;\n}\n.view-user[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%] {\n  color: #585858;\n}\n.view-user[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  padding: 0;\n  border-radius: 10px 10px 0 0;\n}\n.edit-profile[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  background-color: #9e9e9e;\n  min-width: 125px;\n}\n.save-change[_ngcontent-%COMP%] {\n  background-color: #ff6400;\n  color: #fff;\n  min-width: 125px;\n}\n.editicon[_ngcontent-%COMP%]   .mat-icon-button.mat-accent[_ngcontent-%COMP%] {\n  color: #1072ce !important;\n}\n.deleteicon[_ngcontent-%COMP%]   .mat-icon-button.mat-accent[_ngcontent-%COMP%] {\n  color: #1072ce !important;\n  margin-right: 10px;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, \n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  width: 100px;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(5), \n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(5) {\n  width: 190px;\n  text-align: left;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(2), \n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(2) {\n  width: 217px;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: center;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 30px !important;\n}\n.delbtn[_ngcontent-%COMP%] {\n  background: #1072ce !important;\n}\n.norecord[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  border: 1px solid #ccc9;\n  background-color: #fbfbfb;\n}\n.custom-error[_ngcontent-%COMP%] {\n  color: red;\n  display: block;\n  font-size: 11px;\n  position: absolute;\n  left: 26px;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 1em;\n}\ntable.mat-table[_ngcontent-%COMP%] {\n  border-collapse: separate !important;\n  border-spacing: 0 12px !important;\n  position: relative;\n  top: -32px;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 10px !important;\n  border-bottom-right-radius: 10px !important;\n  position: relative;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #fff;\n  padding-right: 10px;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 67px !important;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.19) !important;\n}\n.usermangemt[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-radius: 5px 0 0 0px !important;\n}\n.usermangemt[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-radius: 0px 5px 0 0px !important;\n}\n.name_outer[_ngcontent-%COMP%] {\n  line-height: 16px;\n}\n[hidden][_ngcontent-%COMP%] {\n  display: none !important;\n}\n.msg[_ngcontent-%COMP%] {\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.dosskyBlue[_ngcontent-%COMP%] {\n  border-left: 5px solid #2d68c4;\n}\n.dosGreen[_ngcontent-%COMP%] {\n  border-left: 5px solid #31b44a;\n}\n.dosorange[_ngcontent-%COMP%] {\n  border-left: 5px solid #fed504;\n}\n.dosequine[_ngcontent-%COMP%] {\n  border-left: 5px solid #006271;\n}\n.dosBlue[_ngcontent-%COMP%] {\n  border-left: 5px solid #a0dcee;\n}\n.dosallother[_ngcontent-%COMP%] {\n  border-left: 5px solid #a884bb;\n}\n.dotdosskyBlue[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #2d68c4;\n}\n.dotdosGreen[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #31b44a;\n}\n.dotdosorange[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #fed504;\n}\n.dotdosequine[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #006271;\n}\n.dotdosBlue[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #a0dcee;\n}\n.dotdosallother[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #a884bb;\n}\n.star_wrapper[_ngcontent-%COMP%] {\n  width: 40px;\n}\n.comp_text[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n#inner_table[_ngcontent-%COMP%] {\n  border-right: 17px solid transparent;\n  border-collapse: inherit !important;\n  border-spacing: inherit !important;\n  border-bottom-left-radius: 10px !important;\n}\n#inner_table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n  box-shadow: none !important;\n}\n.noresult[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 51px;\n  width: calc(100vw - 397px);\n}\n.tool_text[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n  height: 22px;\n}\n.bluetext[_ngcontent-%COMP%] {\n  color: #000 !important;\n  padding-right: 24px;\n  word-break: break-word;\n  white-space: normal;\n}\n.left-block[_ngcontent-%COMP%] {\n  width: calc(100vw - 366px) !important;\n}\ntable[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.tube_type_key[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 33px !important;\n}\n.tblpart[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  margin-left: 20px;\n}\n.srchpart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  top: -5px !important;\n  position: relative;\n}\n.srchpart[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.bko-page-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  margin-top: 70px;\n  padding: 25px 0px 0px;\n}\n  .srchpart .mat-form-field-appearance-outline .mat-form-field-infix {\n  top: 1px !important;\n}\n.dashboard-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:nth-child(4n+1), \n.dashboard-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:nth-child(even) {\n  background: #fff !important;\n}\n  .usermangemt .mat-sort-header-button {\n  white-space: nowrap !important;\n  padding-right: 10px !important;\n}\n.m-fav[_ngcontent-%COMP%]   .clrall.m-clrall[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 767px) {\n  .usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.down-arrow[_ngcontent-%COMP%] {\n    position: absolute !important;\n    bottom: 21px !important;\n    left: 8px !important;\n    width: 20px !important;\n    background: none;\n    min-width: 20px !important;\n    padding: 0 !important;\n  }\n  .tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n    height: 300px;\n    overflow-y: auto;\n  }\n  .desc_text[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    padding-top: 3px;\n  }\n  tr.example-element-row.pt-5.pb-4.mat-row.dosorange[_ngcontent-%COMP%], \n   tr.example-element-row.pt-5.pb-4.mat-row.dosGreen[_ngcontent-%COMP%], \n   tr.example-element-row.pt-5.pb-4.mat-row.dosallother[_ngcontent-%COMP%] {\n    background: #fff !important;\n  }\n  .example-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(3) {\n    height: 50px;\n  }\n  #inner_table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  #inner_table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    padding-top: 10px;\n  }\n  .clrall[_ngcontent-%COMP%] {\n    display: none;\n  }\n  tr.example-element-row.pt-5.pb-4.mat-row.dosskyBlue[_ngcontent-%COMP%] {\n    background: #fff !important;\n  }\n  .m-fav[_ngcontent-%COMP%]   .clrall.m-clrall[_ngcontent-%COMP%] {\n    display: block;\n  }\n    .dashboard .mat-card {\n    background: none;\n    box-shadow: none !important;\n  }\n  .tblpart[_ngcontent-%COMP%] {\n    background: #fff;\n    padding: 15px 5px 0 20px;\n    margin: 10px 30px -10px 20px;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n  }\n  .toprow[_ngcontent-%COMP%] {\n    background: #fff !important;\n    padding: 20px;\n    margin: 0 30px 0 20px;\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px;\n  }\n  .tooltip[_ngcontent-%COMP%] {\n    margin-right: 8px;\n  }\n  .mat-table[_ngcontent-%COMP%] {\n    background: none;\n  }\n  .m-fav[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n  }\n  .dashboard-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   img[_ngcontent-%COMP%] {\n    right: 0px;\n    position: relative;\n    z-index: 99;\n    width: 22px;\n  }\n  .tat_text[_ngcontent-%COMP%] {\n    width: auto;\n    padding-right: 20px;\n  }\n  table[_ngcontent-%COMP%], \n   thead[_ngcontent-%COMP%], \n   tbody[_ngcontent-%COMP%], \n   th[_ngcontent-%COMP%], \n   td[_ngcontent-%COMP%], \n   tr[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  td[_ngcontent-%COMP%] {\n    border: none;\n    border-bottom: 0px solid rgb(255, 255, 255);\n    position: relative;\n    padding-left: 50%;\n  }\n  .dashboard-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  td[_ngcontent-%COMP%]   span.textTtl[_ngcontent-%COMP%] {\n    display: inline-block !important;\n    position: absolute;\n    top: 50%;\n    left: 0;\n    padding-right: 10px;\n    white-space: inherit;\n    transform: translate(0, -50%);\n    font-weight: bold;\n    color: #000;\n    padding-left: 3%;\n  }\n  .example-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 10px 0px;\n  }\n  .usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    border-radius: 3px !important;\n  }\n  #inner_table[_ngcontent-%COMP%] {\n    border-bottom-left-radius: 3px !important;\n  }\n  tr.mat-header-row[_ngcontent-%COMP%] {\n    height: auto !important;\n  }\n  .usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    width: 100% !important;\n    min-width: 100% !important;\n    padding-left: 38% !important;\n    text-align: left !important;\n    word-break: break-all;\n    border: none;\n  }\n  .usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    padding-top: 5px;\n  }\n  table.mat-table[_ngcontent-%COMP%] {\n    top: -58px;\n  }\n  #inner_table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #inner_table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    padding: 10px 0;\n  }\n  #inner_table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .comp[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n  }\n  .norecord[_ngcontent-%COMP%] {\n    background-color: #ffffff !important;\n    border-radius: 10px !important;\n    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.19) !important;\n  }\n  .norecord[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    width: 100% !important;\n    text-align: center;\n  }\n  .star_wrapper[_ngcontent-%COMP%] {\n    width: 40px;\n    position: absolute;\n    top: -30px;\n    left: 9px;\n  }\n  .dashboard-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:nth-child(4n+1), \n   .dashboard-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:nth-child(even) {\n    background: transparent !important;\n  }\n  tr.example-detail-row[_ngcontent-%COMP%] {\n    top: -21px;\n  }\n  .title-container[_ngcontent-%COMP%] {\n    margin: 0 0px 20px;\n    background: #fff;\n    padding: 12px;\n    border-top: 2px solid #cfcdcd;\n    border-bottom: 3px solid #cfcdcd;\n  }\n  tr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n    background: white;\n  }\n}\n@media screen and (max-width: 560px) {\n  .usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 48% !important;\n    padding-right: 10px;\n  }\n}\n@media screen and (max-width: 450px) {\n  .sample-req-txt[_ngcontent-%COMP%] {\n    width: 115px;\n    padding-right: 0px !important;\n    line-height: 16px;\n    word-break: break-word;\n  }\n  .tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n    width: 296px;\n  }\n}\n@media screen and (max-width: 375px) {\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \n   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n  .tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    align-self: start !important;\n  }\n}\n@media screen and (max-width: 360px) {\n  .page-title[_ngcontent-%COMP%] {\n    padding: 14px 23px;\n  }\n  .usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding-left: 44% !important;\n    padding-right: 5px;\n  }\n}\n@media screen and (max-width: 768px) and (max-width: 1024px) {\n  .usermangemt[_ngcontent-%COMP%] {\n    max-height: calc(100vh - 278px) !important;\n  }\n  .tblpartmain[_ngcontent-%COMP%] {\n    padding-right: 0 !important;\n  }\n  .tblpartmain[_ngcontent-%COMP%]   .tblpartone[_ngcontent-%COMP%] {\n    margin-right: 0.5rem !important;\n  }\n  .tblpartmain[_ngcontent-%COMP%]     .mat-raised-button {\n    min-width: initial !important;\n  }\n}\n@media screen and (min-width: 800px) and (max-width: 1180px) {\n  .usermangemt[_ngcontent-%COMP%] {\n    max-height: calc(100vh - 278px) !important;\n  }\n  .tblpartmain[_ngcontent-%COMP%] {\n    padding-right: 8px !important;\n  }\n  .tblpartmain[_ngcontent-%COMP%]   .tblpartone[_ngcontent-%COMP%] {\n    margin-right: 0.5rem !important;\n  }\n  .tblpartmain[_ngcontent-%COMP%]     .mat-raised-button {\n    min-width: initial !important;\n  }\n}\n.checkmark[_ngcontent-%COMP%]:before {\n  content: "L";\n  font-family: "gothambook", sans-serif;\n  transform: scaleX(-1) rotate(-35deg);\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 1em;\n  width: 1em;\n  color: #000000c7;\n  height: 1em;\n  position: absolute;\n  left: 90%;\n  top: 10px;\n}\n.usermangemt[_ngcontent-%COMP%]   .dashboard-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: initial !important;\n}\n.example-element-detail[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-left: 17px;\n}\n.sprt[_ngcontent-%COMP%] {\n  padding-right: 35px;\n  align-items: center;\n}\n/*# sourceMappingURL=dos.component.css.map */'], data: { animation: [
      trigger("detailExpand", [
        state("collapsed", style({ height: "0px", minHeight: "0" })),
        state("expanded", style({ height: "*" })),
        transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))
      ])
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DosComponent, { className: "DosComponent", filePath: "src\\app\\modules\\dos-page\\dos.component.ts", lineNumber: 36 });
})();

// src/app/modules/dos-page/dos-page.module.ts
var routes = [
  { path: "", component: DosComponent }
];
var DosPageModule = class _DosPageModule {
  static {
    this.\u0275fac = function DosPageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DosPageModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DosPageModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      MatModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes),
      RouterModule
    ] });
  }
};

export {
  DosPageModule
};
//# sourceMappingURL=chunk-MG4UUGQT.js.map
