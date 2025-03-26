import {
  HeaderComponent,
  HeaderModule,
  SideMenuComponent,
  SideMenuModule,
  pipeModule
} from "./chunk-YS4O5PGJ.js";
import {
  DosPageModule
} from "./chunk-MG4UUGQT.js";
import {
  ActivatedRoute,
  AlertMessageComponent,
  CommonModule,
  CommonService,
  ConfirmationDialogService,
  CustomDateAdapter,
  DashboardScreen,
  DataService,
  DateAdapter,
  DateFormats,
  DatePipe,
  DefaultValueAccessor,
  EncrDecrService,
  EnmAnalysisSource,
  EnmCountry,
  EnmLanguage,
  EnmModule,
  EventEmitter,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  FuseService,
  HeaderService,
  Injectable,
  LabelService,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
  MatDrawer,
  MatDrawerContainer,
  MatIcon,
  MatLegacyAnchor,
  MatLegacyAutocomplete,
  MatLegacyAutocompleteModule,
  MatLegacyAutocompleteTrigger,
  MatLegacyButton,
  MatLegacyCard,
  MatLegacyCell,
  MatLegacyCellDef,
  MatLegacyCheckbox,
  MatLegacyColumnDef,
  MatLegacyError,
  MatLegacyFormField,
  MatLegacyFormFieldModule,
  MatLegacyHeaderCell,
  MatLegacyHeaderCellDef,
  MatLegacyHeaderRow,
  MatLegacyHeaderRowDef,
  MatLegacyInput,
  MatLegacyInputModule,
  MatLegacyMenu,
  MatLegacyMenuItem,
  MatLegacyMenuTrigger,
  MatLegacyOption,
  MatLegacyPaginator,
  MatLegacyPrefix,
  MatLegacyRadioButton,
  MatLegacyRadioGroup,
  MatLegacyRow,
  MatLegacyRowDef,
  MatLegacySelect,
  MatLegacySelectModule,
  MatLegacySuffix,
  MatLegacyTable,
  MatLegacyTableDataSource,
  MatLegacyTooltip,
  MatLegacyTooltipModule,
  MatModule,
  MatSort,
  MatSortHeader,
  MaxLengthValidator,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgForm,
  NgIf,
  NgModel,
  NgModelGroup,
  NgModule,
  NgSelectOption,
  NgStyle,
  NgZone,
  NgbActiveModal,
  NgbModal,
  NgbModule,
  OrderParams,
  OwnerModel,
  PatientService,
  Pipe,
  ReactiveFormsModule,
  RefLabService,
  RequiredValidator,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SelectControlValueAccessor,
  SidefilterService,
  SidemenuService,
  Title,
  ToastrService,
  UntypedFormBuilder,
  UntypedFormGroup,
  UserService,
  Validators,
  animate,
  constant,
  debounceTime,
  environment,
  setClassMetadata,
  state,
  style,
  transition,
  trigger,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction6,
  ɵɵpureFunction7,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-X5ZGY5K2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-VTXF2OHE.js";

// src/app/guards/auth.guard.ts
var AuthGuard = class _AuthGuard {
  constructor(router) {
    this.router = router;
  }
  canActivate() {
    if (localStorage.authDetails != void 0) {
      this.isLoggedIn = JSON.parse(localStorage.authDetails).access_token;
      this.BackOfficeFlag = JSON.parse(localStorage.authDetails).BackOfficeFlag;
      this.isConsultantUser = JSON.parse(localStorage.authDetails).IsConsultantUser;
      this.navUrl = this.BackOfficeFlag == true ? "/internal" : "/login";
    }
    if (this.isLoggedIn) {
      return true;
    }
    this.router.navigateByUrl(this.navUrl);
    return false;
  }
  checkAuthentication() {
    if (this.isLoggedIn) {
      return true;
    }
    return false;
  }
  static {
    this.\u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
  }
};

// src/app/guards/businessAdmin.guard.ts
var BusinessAdminGuard = class _BusinessAdminGuard {
  constructor(router) {
    this.router = router;
  }
  canActivate() {
    if (localStorage.authDetails != void 0) {
      this.isLoggedIn = JSON.parse(localStorage.authDetails).access_token;
      this.BackOfficeFlag = JSON.parse(localStorage.authDetails).BackOfficeFlag;
    }
    if (this.BackOfficeFlag == false && this.isLoggedIn) {
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
  static {
    this.\u0275fac = function BusinessAdminGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BusinessAdminGuard)(\u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BusinessAdminGuard, factory: _BusinessAdminGuard.\u0275fac, providedIn: "root" });
  }
};

// src/app/guards/admin-auth.guard.ts
var AdminAuthGuard = class _AdminAuthGuard {
  constructor(router) {
    this.router = router;
  }
  canActivate() {
    if (localStorage.authDetails != void 0) {
      this.isLoggedIn = JSON.parse(localStorage.authDetails).access_token;
      this.BackOfficeFlag = JSON.parse(localStorage.authDetails).BackOfficeFlag;
    }
    if (this.BackOfficeFlag && this.isLoggedIn) {
      return true;
    }
    this.router.navigate(["/internal"]);
    return false;
  }
  static {
    this.\u0275fac = function AdminAuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminAuthGuard)(\u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminAuthGuard, factory: _AdminAuthGuard.\u0275fac, providedIn: "root" });
  }
};

// src/app/guards/rotor.guard.ts
var AuthGuardRotor = class _AuthGuardRotor {
  constructor(router, userService, confirmationDialogService, labelService) {
    this.router = router;
    this.userService = userService;
    this.confirmationDialogService = confirmationDialogService;
    this.labelService = labelService;
  }
  canActivate() {
    if (this.labelService.userCountryId == EnmCountry.UnitedStates || this.labelService.userCountryId == EnmCountry.Canada) {
      return true;
    }
    return false;
  }
  static {
    this.\u0275fac = function AuthGuardRotor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthGuardRotor)(\u0275\u0275inject(Router), \u0275\u0275inject(UserService), \u0275\u0275inject(ConfirmationDialogService), \u0275\u0275inject(LabelService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuardRotor, factory: _AuthGuardRotor.\u0275fac, providedIn: "root" });
  }
};

// src/app/guards/refLab.guard.ts
var RefLabGuard = class _RefLabGuard {
  constructor(router, dataService, confirmationDialogService, labelService) {
    this.router = router;
    this.dataService = dataService;
    this.confirmationDialogService = confirmationDialogService;
    this.labelService = labelService;
    this.IsLinkedRefLabClinic = false;
    this.isConsultant = false;
    this.isLoggedIn = null;
  }
  canActivate(route, state2, showPop = true) {
    this.isLoggedIn = JSON.parse(localStorage?.authDetails)?.access_token;
    if (this.dataService.appData.authDetails["IsLinkedRefLabClinic"] || this.dataService.appData.authDetails["IsConsultantUser"]) {
      this.IsLinkedRefLabClinic = this.dataService.appData.authDetails["IsLinkedRefLabClinic"];
      this.isConsultant = this.dataService.appData.authDetails["IsConsultantUser"];
    }
    if (this.isLoggedIn) {
      if (this.IsLinkedRefLabClinic || this.isConsultant) {
        return true;
      } else {
        const msg = this.labelService.dsSideMenuScreen.ConsultationRestrictionPopupMsg;
        if (showPop) {
          this.confirmationDialogService.dismiss();
          this.confirmationDialogService.confirm("Alert", msg, "Ok", "Cancel", "sm", true, false);
        }
      }
    } else {
      this.router.navigateByUrl("/login");
    }
    return false;
  }
  static {
    this.\u0275fac = function RefLabGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RefLabGuard)(\u0275\u0275inject(Router), \u0275\u0275inject(DataService), \u0275\u0275inject(ConfirmationDialogService), \u0275\u0275inject(LabelService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RefLabGuard, factory: _RefLabGuard.\u0275fac, providedIn: "root" });
  }
};

// src/app/guards/consultant.guard.ts
var ConsultantGuard = class _ConsultantGuard {
  constructor(router) {
    this.router = router;
  }
  canActivate() {
    if (localStorage.authDetails != void 0) {
      this.isLoggedIn = JSON.parse(localStorage.authDetails).access_token;
      this.isConsultantUser = JSON.parse(localStorage.authDetails).IsConsultantUser;
    }
    if (this.isLoggedIn && this.isConsultantUser) {
      return true;
    }
    return false;
  }
  static {
    this.\u0275fac = function ConsultantGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsultantGuard)(\u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConsultantGuard, factory: _ConsultantGuard.\u0275fac, providedIn: "root" });
  }
};

// src/app/guards/isReflabActive.guard.ts
var IsReflabActive = class _IsReflabActive {
  constructor(router, dataService, confirmationDialogService, labelService) {
    this.router = router;
    this.dataService = dataService;
    this.confirmationDialogService = confirmationDialogService;
    this.labelService = labelService;
    this.isReflabActive = false;
  }
  canActivate() {
    if (this.dataService.appData.authDetails["IsReflabActive"]) {
      this.isReflabActive = this.dataService.appData.authDetails["IsReflabActive"];
    }
    if (this.isReflabActive) {
      return true;
    }
    return false;
  }
  static {
    this.\u0275fac = function IsReflabActive_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IsReflabActive)(\u0275\u0275inject(Router), \u0275\u0275inject(DataService), \u0275\u0275inject(ConfirmationDialogService), \u0275\u0275inject(LabelService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IsReflabActive, factory: _IsReflabActive.\u0275fac, providedIn: "root" });
  }
};

// src/app/guards/maintenanceMode.guard.ts
var MaintenanceMode = class _MaintenanceMode {
  constructor(router, commonService, dataService, labelService) {
    this.router = router;
    this.commonService = commonService;
    this.dataService = dataService;
    this.labelService = labelService;
    this.commonService.getUserDDLDetails(EnmLanguage.English, EnmCountry.UnitedStates, null).subscribe({ next: () => {
      this.dataService.appData.isMaintenanceMode = false;
      this.dataService.data.next(this.dataService.appData);
    }, error: (err) => {
      console.log(JSON.stringify(err));
      this.commonService.showCommonToastrError();
    } });
  }
  canActivate() {
    this.isMaintenanceMode = this.dataService.appData.isMaintenanceMode;
    if (!this.isMaintenanceMode) {
      return true;
    }
    this.router.navigate(["/maintenance"]);
  }
  static {
    this.\u0275fac = function MaintenanceMode_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MaintenanceMode)(\u0275\u0275inject(Router), \u0275\u0275inject(CommonService), \u0275\u0275inject(DataService), \u0275\u0275inject(LabelService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MaintenanceMode, factory: _MaintenanceMode.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/refrence-lab/refrence-lab.component.ts
var RefrenceLabComponent = class _RefrenceLabComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.isBackOfficeUser = this.dataService.appData.authDetails["BackOfficeFlag"];
  }
  static {
    this.\u0275fac = function RefrenceLabComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RefrenceLabComponent)(\u0275\u0275directiveInject(DataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RefrenceLabComponent, selectors: [["app-refrence-lab"]], decls: 7, vars: 0, consts: [[1, "wrapper"], ["id", "content", 1, "page-wrapper", "refpart"]], template: function RefrenceLabComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-side-menu");
        \u0275\u0275elementStart(2, "div", 1)(3, "div")(4, "div");
        \u0275\u0275element(5, "app-header");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(6, "router-outlet");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [RouterOutlet, HeaderComponent, SideMenuComponent], styles: ["\n\n.page-wrapper.refpart[_ngcontent-%COMP%] {\n  height: calc(100vh - 150px);\n}\n@media screen and (max-width: 767px) {\n  .page-wrapper.refpart[_ngcontent-%COMP%] {\n    padding: 20px 0 0 !important;\n  }\n}\n/*# sourceMappingURL=refrence-lab.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RefrenceLabComponent, { className: "RefrenceLabComponent", filePath: "src\\app\\modules\\refrence-lab\\refrence-lab.component.ts", lineNumber: 8 });
})();

// src/app/modules/refrence-lab/orders/note.content.component.ts
var NoteContentComponent = class _NoteContentComponent {
  constructor(activeModal) {
    this.activeModal = activeModal;
  }
  static {
    this.\u0275fac = function NoteContentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NoteContentComponent)(\u0275\u0275directiveInject(NgbActiveModal));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NoteContentComponent, selectors: [["app-note-content"]], inputs: { note: "note" }, decls: 9, vars: 2, consts: [[1, "modal-header"], [1, "modal-title", 2, "font-weight", "bold"], [1, "modal-body"], [2, "border", "1px solid gainsboro", "padding", "14px"], [2, "margin-bottom", "20px", "text-align", "center"], ["mat-raised-button", "", "color", "warn", 2, "min-width", "100px", "background-color", "#ff6400", 3, "click"]], template: function NoteContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h4", 1);
        \u0275\u0275text(2, " Accession Notes ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "div", 2)(4, "p", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "button", 5);
        \u0275\u0275listener("click", function NoteContentComponent_Template_button_click_7_listener() {
          return ctx.activeModal.close("Close click");
        });
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.note.text);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.note.btnText);
      }
    }, dependencies: [MatLegacyButton], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NoteContentComponent, { className: "NoteContentComponent", filePath: "src\\app\\modules\\refrence-lab\\orders\\note.content.component.ts", lineNumber: 22 });
})();

// src/app/modules/refrence-lab/orders/side-filter/side-filter.component.ts
var _c0 = ["fromInput"];
var _c1 = ["toInput"];
var _c2 = ["select"];
var _c3 = ["myText"];
var _c4 = (a0) => ({ "toggle-accordion-icon": a0 });
var _c5 = () => ({ standalone: true });
var _c6 = (a0, a1, a2, a3) => ({ completed: a0, cancelled: a1, ordered: a2, received: a3 });
function SideFilterComponent_mat_option_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const species_r2 = ctx.$implicit;
    \u0275\u0275property("value", species_r2.Code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", species_r2.Code, " ");
  }
}
function SideFilterComponent_mat_option_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 50);
    \u0275\u0275listener("onSelectionChange", function SideFilterComponent_mat_option_48_Template_mat_option_onSelectionChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectionChangee($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dr_r5 = ctx.$implicit;
    \u0275\u0275property("value", dr_r5 == null ? null : dr_r5.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", dr_r5 == null ? null : dr_r5.FirstName, " ", dr_r5 == null ? null : dr_r5.LastName, " ");
  }
}
function SideFilterComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "mat-radio-button", 45);
    \u0275\u0275listener("change", function SideFilterComponent_div_89_Template_mat_radio_button_change_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.test($event));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 51);
    \u0275\u0275element(4, "img", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "span", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", status_r9 == null ? null : status_r9.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", status_r9 == null ? null : status_r9.Status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", status_r9 == null ? null : status_r9.Info)("matTooltipPosition", (status_r9 == null ? null : status_r9.Placement) || "below");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(5, _c6, (status_r9 == null ? null : status_r9.Id) === 1, (status_r9 == null ? null : status_r9.Id) === 2, (status_r9 == null ? null : status_r9.Id) === 3, (status_r9 == null ? null : status_r9.Id) === 4));
  }
}
var SideFilterComponent = class _SideFilterComponent {
  constructor(labelService, dataService, headerService, commonService, refLabService, sidefilterService, fb) {
    this.labelService = labelService;
    this.dataService = dataService;
    this.headerService = headerService;
    this.commonService = commonService;
    this.refLabService = refLabService;
    this.sidefilterService = sidefilterService;
    this.fb = fb;
    this.filterDdn = [];
    this.outFilterBy = new EventEmitter();
    this.outAnlysisSource = new EventEmitter();
    this.dsAnalysisSta = [];
    this.filterStatus = [];
    this.dsAnalysisStatus = [];
    this.breedList = [];
    this.selectedPhysician = [];
    this.pageNumber = 1;
    this.ClearFiltersec = false;
    this.step = 0;
    this.authDetails = this.dataService.appData.authDetails;
    this.businessGuid = this.headerService.selectedBusinessGuid;
    this.userGuid = this.headerService.loginUserGuid;
    this.orderParams = new OrderParams();
    this.isBackOfficeUser = this.dataService.appData.authDetails["BackOfficeFlag"];
    this.labelService.getOrdersScreenLabels();
    this.labelService.bindSideFilterLabel();
    this.label = this.labelService.ordersScreen;
    this.fromDate = new Date(this.commonService.twoYearBeforeFromToday);
    this.toDate = this.commonService.today;
    this.createForm();
    this.dataService.page.subscribe((updatedData) => {
      if (updatedData && updatedData.orders && updatedData.orders.filterParams) {
        if (updatedData.orders.filterParams.PhysicianName && typeof updatedData.orders.filterParams.PhysicianName == "string") {
          updatedData.orders.filterParams.PhysicianName = updatedData.orders.filterParams.PhysicianName.split(",");
          const docs = [];
          if (this.filteredDoctors && this.filteredDoctors.length) {
            updatedData.orders.filterParams.PhysicianName.map((y) => {
              const doc = this.filteredDoctors.find((x) => `${x.FirstName} ${x.LastName}` == y);
              if (doc) {
                docs.push(doc.Id);
              }
            });
            updatedData.orders.filterParams.PhysicianName = docs;
          }
        }
        this.filterForm.patchValue(updatedData.orders.filterParams);
      }
    });
  }
  onDateSelect(date, from) {
    if (from == "fromDate") {
      this.filterForm.patchValue({
        FromDate: this.commonService.getMomentFromDateTime(date),
        ToDate: this.commonService.getMomentFromDateTime(this.toDate)
      });
    } else {
      this.filterForm.patchValue({
        ToDate: this.commonService.getMomentToDateTime(date),
        FromDate: this.commonService.getMomentFromDateTime(this.fromDate)
      });
    }
    this.dataService.pageState.orders.filterParams = this.filterForm.value;
    this.dataService.page.next(this.dataService.pageState);
  }
  filterOrders() {
    const filterData = Object.assign({}, this.filterForm.value);
    this.dataService.pageState.orders.selectedRequestingDoctors = this.selectedPhysician;
    this.dataService.page.next(this.dataService.pageState);
    filterData.PageNo = 1;
    this.dataService.pageState.orders.filterParams = filterData;
    this.dataService.page.next(this.dataService.pageState);
    this.outFilterBy.emit(filterData);
  }
  filterOrdersOnInit() {
    const filterData = Object.assign({}, this.filterForm.value);
    const selectedDr = this.selectedPhysician.map((selectedId) => {
      const doc = this.filteredDoctors.find((doctor) => doctor?.Id === selectedId);
      return doc ? `${doc.FirstName} ${doc.LastName}` : "";
    });
    filterData["PhysicianName"] = selectedDr.length > 0 ? selectedDr.join() : "";
    filterData.PageNo = 1;
    this.outFilterBy.emit(filterData);
  }
  createForm() {
    return this.filterForm = this.fb.group({
      BusinessGuid: [this.businessGuid],
      // required
      UserGuid: [this.userGuid],
      // required
      PatientId: [""],
      PatientName: [""],
      OwnerName: [""],
      PhysicianName: [""],
      FromDate: [""],
      ToDate: [""],
      // isFollowedPatient: [false],
      AnalysisStatusId: [null],
      // MenuName: [''],
      // ClassName: [''],
      OrderNumber: [""],
      AccessionNumber: [""],
      SpeciesId: [""],
      Breed: [""],
      IsApplyFilter: [false],
      PageNo: [1],
      PageSize: [60],
      IsBackOfficeUser: [this.isBackOfficeUser]
    });
  }
  ngOnInit() {
    this.select._handleKeydown = (event) => {
      if (event.key == " " || event.code == "Space")
        return;
      if (!this.select.disabled) {
        this.select.panelOpen ? this.select._handleOpenKeydown(event) : this.select._handleClosedKeydown(event);
      }
    };
    this.getPhysicianList();
    if (this.filterForm.get("FromDate").value && this.filterForm.get("ToDate").value) {
      this.fromDate = new Date(this.filterForm.get("FromDate").value);
      this.toDate = new Date(this.filterForm.get("ToDate").value);
    }
    this.commonService.getFilterDDLDetails(1).subscribe((data) => {
      const filterDropDowns = data.ResponseData;
      this.filterDdn = filterDropDowns.ClassMenuList;
      this.SpeciesList = filterDropDowns.SpeciesList;
      if (filterDropDowns && filterDropDowns.ClassMenuList) {
        this.filterDdn["Class"] = filterDropDowns.ClassMenuList["Class"];
        this.filterDdn["Menu"] = filterDropDowns.ClassMenuList["Menu"];
      }
      this.dsAnalysisStatus = filterDropDowns.AnalysisStatus;
      console.log(this.dsAnalysisStatus, "zoetis");
      this.dsAnalysisStatus?.forEach((ele) => {
        if (ele.Status == "Completed")
          ele.Info = "Order is finished and results are ready to be reviewed.";
        if (ele.Status == "Canceled")
          ele.Info = "Order has been canceled. For questions, please contact customer support.";
        if (ele.Status == "Ordered")
          ele.Info = "The Order has been electronically submitted to the laboratory.";
        if (ele.Status == "Received") {
          ele.Placement = "after";
          ele.Info = "Order has been received at the laboratory and is in the testing process.";
        }
      });
      const status = [];
      status.push(this.dsAnalysisStatus?.find((v) => v.Status == "Ordered"));
      status.push(this.dsAnalysisStatus?.find((v) => v.Status == "Received"));
      status.push(this.dsAnalysisStatus?.find((v) => v.Status == "Completed"));
      status.push(this.dsAnalysisStatus?.find((v) => v.Status == "Canceled"));
      this.dsAnalysisStatus = status;
      this.outAnlysisSource.emit(filterDropDowns.AnalysisSourceList);
    });
    console.log(this.dataService.pageState.orders.selectedRequestingDoctors);
    this.filterOrdersOnInit();
    this.radioselect = this.filterForm.controls["AnalysisStatusId"].value;
  }
  test(data) {
    this.radioselect = data.value;
    this.filterForm.patchValue({ AnalysisStatusId: data.value });
    console.log(this.filterForm.controls["AnalysisStatusId"].value);
  }
  clearFilter() {
    debugger;
    this.myNameElem.nativeElement.value = "";
    this.getPhysicianList();
    this.selectedPhysician = [];
    this.orderParams.BusinessGuid = this.businessGuid;
    this.filterForm.patchValue({ "PatientId": null, "PatientName": null, "OwnerName": null, "PhysicianName": null, "AnalysisStatusId": null, "Breed": null, "SpeciesId": "", "FromDate": null, "ToDate": null, "OrderNumber": null, "AccessionNumber": null, IsApplyFilter: false });
    this.fromInput.value = "";
    this.toInput.value = "";
    this.fromDate = new Date(this.commonService.twoYearBeforeFromToday);
    this.toDate = new Date(this.commonService.today);
    this.dataService.pageState.orders.filterParams = null;
    this.dataService.pageState.orders.resultsList = [];
    this.dataService.pageState.orders.selectedRow = null;
    this.dataService.pageState.orders.sortState = { active: null, direction: null };
    this.dataService.page.next(this.dataService.pageState);
    this.radioselect = null;
    this.filterOrders();
  }
  GetOrderDDLList() {
    const filterDropDowns = this.dataService.appData.filterDropDownList;
    this.SpeciesList = filterDropDowns.enSpeciesList;
  }
  // public getPhysicianList(SearchText, PageNo, PageSize, AnalysisSourceId) {
  getPhysicianList() {
    this.commonService.GetProviderList(localStorage.businessGuid).subscribe((data) => {
      const uniquePhysicians = [];
      const seenNames = /* @__PURE__ */ new Set();
      data.ResponseData.Provider.forEach((ele) => {
        if (ele["FirstName"] == ele["LastName"]) {
          ele["LastName"] = "";
          ele["PhysicianIdName"] = ele["FirstName"];
        }
        const cleanedName = ele.ProviderIdName?.replace(/\s*\([^)]*\)$/, "").trim().toLowerCase();
        if (!seenNames.has(cleanedName)) {
          seenNames.add(cleanedName);
          uniquePhysicians.push(__spreadProps(__spreadValues({}, ele), {
            ProviderIdName: cleanedName
          }));
        }
        ;
      });
      this.DoctorList = uniquePhysicians;
      this.filteredDoctors = uniquePhysicians;
      if (this.dataService.pageState.orders.selectedRequestingDoctors.length) {
        this.filterForm.patchValue({ PhysicianName: this.dataService.pageState.orders.selectedRequestingDoctors });
        this.selectedPhysician = this.dataService.pageState.orders.selectedRequestingDoctors;
      }
      this.pageNumber += 1;
    }, (err) => {
      console.log(err);
    });
  }
  onSpeciesChange(id) {
    this.getBreedList(id);
  }
  getBreedList(speciesId) {
    const langId = this.dataService.appData.authDetails["LanguageId"];
    this.refLabService.getBreedListBySpeciesId(speciesId, langId).subscribe((res) => {
      this.filterForm.patchValue({ Breed: "" });
      this.breedList = res.ResponseData;
    }, (err) => {
      console.log(JSON.stringify(err));
      this.commonService.showCommonToastrError();
    });
  }
  setStep(index) {
    this.step = this.step == index ? 0 : index;
  }
  apply() {
    this.filterForm.patchValue({
      ToDate: this.commonService.getMomentToDateTime(this.toDate),
      FromDate: this.commonService.getMomentFromDateTime(this.fromDate)
    });
    this.filterForm.patchValue({ IsApplyFilter: true });
    this.filterOrders();
    this.closeFilter();
  }
  closeFilter() {
    this.commonService.closeFilterForPatient.next(true);
  }
  triggerEvent(e) {
    console.log(e);
    if (e == false) {
      this.filteredDoctors = this.DoctorList;
      this.myNameElem.nativeElement.value = "";
    }
    if (e == true) {
      this.filterForm.patchValue({ PhysicianName: this.selectedPhysician });
    }
  }
  selectionChangee($event) {
    if ($event.isUserInput) {
      console.log($event.source.value);
      if (this.selectedPhysician.indexOf($event.source.value) == -1) {
        this.selectedPhysician.push($event.source.value);
      } else {
        this.selectedPhysician.splice(this.selectedPhysician.indexOf($event.source.value), 1);
      }
      console.log("Selected Physician===>", this.selectedPhysician);
    }
  }
  onRequestingDrChange(e) {
    console.log(e);
  }
  _filter(list, searchText) {
    const filterValue = searchText.toLowerCase();
    return list.filter((option) => {
      if (option.ProviderIdName.toLowerCase().startsWith(filterValue) || option.FirstName.toLowerCase().startsWith(filterValue) || option.LastName.toLowerCase().startsWith(filterValue)) {
        return true;
      } else {
        return false;
      }
    });
  }
  setValueToMultiPhy() {
    setTimeout(() => {
      this.selectedPhy = this.selectedPhysician;
    }, 200);
  }
  applyFilter(e) {
    return new Promise((resolve) => {
      if (e.target.value.length == 0) {
        this.filteredDoctors = this.DoctorList;
        this.setValueToMultiPhy();
      } else {
        this.filteredDoctors = this._filter(this.DoctorList, e.target.value);
        this.setValueToMultiPhy();
      }
      resolve();
    });
  }
  static {
    this.\u0275fac = function SideFilterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SideFilterComponent)(\u0275\u0275directiveInject(LabelService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(HeaderService), \u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(RefLabService), \u0275\u0275directiveInject(SidefilterService), \u0275\u0275directiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SideFilterComponent, selectors: [["app-side-filter"]], viewQuery: function SideFilterComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7, MatLegacyInput);
        \u0275\u0275viewQuery(_c1, 7, MatLegacyInput);
        \u0275\u0275viewQuery(_c2, 7);
        \u0275\u0275viewQuery(_c3, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fromInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.toInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.select = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.myNameElem = _t.first);
      }
    }, outputs: { outFilterBy: "outFilterBy", outAnlysisSource: "outAnlysisSource" }, decls: 93, vars: 36, consts: [["select", "matSelect"], ["myText", ""], ["fromInput", ""], ["pickerFrom", ""], ["toInput", ""], ["pickerTo", ""], [3, "formGroup"], [1, "resp", "clse"], [3, "click"], [1, "resp", "respfilter"], [1, "d-flex", "justify-content-between", "mt-4"], [1, "filter-head"], [1, "clrall", 3, "click"], [1, "pl-4", "pr-4"], [1, "desk", "d-flex", "justify-content-between", "mt-4", "mob-filter"], [1, "d-flex", "flex-column"], [1, "r-head", "mt-1", "heading"], [1, "mt-1"], ["appearance", "outline", "floatLabel", "always"], ["type", "text", "matInput", "", "formControlName", "PatientId", "placeholder", "Patient ID", "maxlength", "20", "autocomplete", "off", 3, "keyup.enter"], ["type", "text", "matInput", "", "formControlName", "PatientName", "placeholder", "Patient Name", "maxlength", "20", "autocomplete", "off", 3, "keyup.enter"], ["type", "text", "matInput", "", "formControlName", "OwnerName", "placeholder", "Owner Name", "maxlength", "20", "autocomplete", "off", 3, "keyup.enter"], [1, "d-flex", "flex-column", "mt-3"], ["formControlName", "SpeciesId", "placeholder", "Species", "placeholder", "Species", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "mt-2"], ["appearance", "outline", "floatLabel", "always", 3, "hidden"], ["placeholder", "Search Requesting Doctor", "formControlName", "PhysicianName", "multiple", "", 3, "selectionChange", "openedChange"], ["type", "text", "placeholder", "Search Requesting Doctor", "matInput", "", 2, "margin", "12px", 3, "keyup"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [2, "text-align", "center", 3, "hidden"], [2, "margin", "14px 5px"], [1, "heading"], [2, "float", "right", 3, "click"], [1, "closeall", 3, "ngClass"], ["src", "../../../assets/img/updropdwn.png", "alt", "updropdwn", 1, "updropdwn"], [3, "hidden"], ["type", "text", "matInput", "", "formControlName", "OrderNumber", "placeholder", "Order/Accession ID", "maxlength", "30", "autocomplete", "off", 3, "keyup.enter"], [1, "d-flex", "flex-column", "range"], [1, "r-head", "mt-3", "heading"], ["matInput", "", "ngDefaultControl", "", "placeholder", "From", "readonly", "", 3, "ngModelChange", "focus", "dateChange", "ngModel", "matDatepicker", "max", "ngModelOptions"], ["matPrefix", "", 3, "for"], ["matInput", "", "placeholder", "To", "ngDefaultControl", "", "readonly", "", 3, "focus", "ngModelChange", "dateChange", "matDatepicker", "ngModel", "min", "max", "ngModelOptions"], ["ngDefaultControl", "", 1, "d-flex", "flex-column", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "d-flex", "justify-content-between", "mb-1"], [1, "example-margin", 3, "change", "value"], ["class", "d-flex justify-content-between mb-1", 4, "ngFor", "ngForOf"], [1, "mt-5", "mb-3", "d-flex", "justify-content-center"], ["mat-raised-button", "", "color", "warn", 3, "click"], [3, "value"], [3, "onSelectionChange", "value"], ["matTooltipClass", "below", 1, "status-info-icon", 3, "matTooltip", "matTooltipPosition"], ["src", "./assets/img/info.png", "alt", ""], [3, "ngClass"]], template: function SideFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "form", 6)(1, "div", 7)(2, "p");
        \u0275\u0275text(3, "X ");
        \u0275\u0275elementStart(4, "span", 8);
        \u0275\u0275listener("click", function SideFilterComponent_Template_span_click_4_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeFilter());
        });
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 9)(7, "div", 10)(8, "span", 11);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 12);
        \u0275\u0275listener("click", function SideFilterComponent_Template_a_click_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.clearFilter());
        });
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 13)(13, "div", 14)(14, "span", 11);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "a", 12);
        \u0275\u0275listener("click", function SideFilterComponent_Template_a_click_16_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.clearFilter());
        });
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(18, "hr");
        \u0275\u0275elementStart(19, "div", 15)(20, "div", 16);
        \u0275\u0275text(21, " Patient ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 17)(23, "mat-form-field", 18)(24, "input", 19);
        \u0275\u0275listener("keyup.enter", function SideFilterComponent_Template_input_keyup_enter_24_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.apply());
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "div")(26, "mat-form-field", 18)(27, "input", 20);
        \u0275\u0275listener("keyup.enter", function SideFilterComponent_Template_input_keyup_enter_27_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.apply());
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div")(29, "mat-form-field", 18)(30, "input", 21);
        \u0275\u0275listener("keyup.enter", function SideFilterComponent_Template_input_keyup_enter_30_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.apply());
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "section")(32, "div", 16);
        \u0275\u0275text(33, " Species ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 22)(35, "div")(36, "mat-form-field", 18)(37, "mat-select", 23);
        \u0275\u0275listener("selectionChange", function SideFilterComponent_Template_mat_select_selectionChange_37_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSpeciesChange($event.value));
        });
        \u0275\u0275template(38, SideFilterComponent_mat_option_38_Template, 2, 2, "mat-option", 24);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(39, "div")(40, "div", 16);
        \u0275\u0275text(41, " Requesting Doctor ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 25)(43, "mat-form-field", 26)(44, "mat-select", 27, 0);
        \u0275\u0275listener("selectionChange", function SideFilterComponent_Template_mat_select_selectionChange_44_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onRequestingDrChange($event));
        })("openedChange", function SideFilterComponent_Template_mat_select_openedChange_44_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.triggerEvent($event));
        });
        \u0275\u0275elementStart(46, "input", 28, 1);
        \u0275\u0275listener("keyup", function SideFilterComponent_Template_input_keyup_46_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.applyFilter($event));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(48, SideFilterComponent_mat_option_48_Template, 2, 3, "mat-option", 29);
        \u0275\u0275elementStart(49, "p", 30);
        \u0275\u0275text(50, " No Records Found ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(51, "hr");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "section")(53, "div", 31)(54, "span", 32);
        \u0275\u0275text(55, "Order ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "a", 33);
        \u0275\u0275listener("click", function SideFilterComponent_Template_a_click_56_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setStep(2));
        });
        \u0275\u0275elementStart(57, "span", 34);
        \u0275\u0275element(58, "img", 35);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(59, "div", 36)(60, "div", 17)(61, "mat-form-field", 18)(62, "input", 37);
        \u0275\u0275listener("keyup.enter", function SideFilterComponent_Template_input_keyup_enter_62_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.apply());
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(63, "div", 38)(64, "div", 39);
        \u0275\u0275text(65);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div")(67, "mat-form-field", 18)(68, "input", 40, 2);
        \u0275\u0275twoWayListener("ngModelChange", function SideFilterComponent_Template_input_ngModelChange_68_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.fromDate, $event) || (ctx.fromDate = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("focus", function SideFilterComponent_Template_input_focus_68_listener() {
          \u0275\u0275restoreView(_r1);
          const pickerFrom_r6 = \u0275\u0275reference(72);
          return \u0275\u0275resetView(pickerFrom_r6.open());
        })("dateChange", function SideFilterComponent_Template_input_dateChange_68_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDateSelect($event.target.value, "fromDate"));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(70, "mat-datepicker-toggle", 41)(71, "mat-datepicker", null, 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div")(74, "mat-form-field", 18)(75, "input", 42, 4);
        \u0275\u0275listener("focus", function SideFilterComponent_Template_input_focus_75_listener() {
          \u0275\u0275restoreView(_r1);
          const pickerTo_r7 = \u0275\u0275reference(79);
          return \u0275\u0275resetView(pickerTo_r7.open());
        });
        \u0275\u0275twoWayListener("ngModelChange", function SideFilterComponent_Template_input_ngModelChange_75_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.toDate, $event) || (ctx.toDate = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("dateChange", function SideFilterComponent_Template_input_dateChange_75_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDateSelect($event.target.value, "ss"));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(77, "mat-datepicker-toggle", 41)(78, "mat-datepicker", null, 5);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(80, "hr");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "div", 22)(82, "div", 16);
        \u0275\u0275text(83);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "div", 15)(85, "mat-radio-group", 43);
        \u0275\u0275twoWayListener("ngModelChange", function SideFilterComponent_Template_mat_radio_group_ngModelChange_85_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.radioselect, $event) || (ctx.radioselect = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(86, "div", 44)(87, "mat-radio-button", 45);
        \u0275\u0275listener("change", function SideFilterComponent_Template_mat_radio_button_change_87_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.test($event));
        });
        \u0275\u0275text(88);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(89, SideFilterComponent_div_89_Template, 6, 10, "div", 46);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(90, "div", 47)(91, "button", 48);
        \u0275\u0275listener("click", function SideFilterComponent_Template_button_click_91_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.apply());
        });
        \u0275\u0275text(92);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        const pickerFrom_r6 = \u0275\u0275reference(72);
        const pickerTo_r7 = \u0275\u0275reference(79);
        \u0275\u0275property("formGroup", ctx.filterForm);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.labelService.dsSideFilterScreen.Cancel);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.labelService.dsSideFilterScreen.Filters);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.labelService.dsSideFilterScreen.ClearAll);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.label.Filters, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.label.ClearAll, " ");
        \u0275\u0275advance(21);
        \u0275\u0275property("ngForOf", ctx.SpeciesList);
        \u0275\u0275advance(5);
        \u0275\u0275property("hidden", !ctx.filteredDoctors);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.filteredDoctors);
        \u0275\u0275advance();
        \u0275\u0275property("hidden", ctx.filteredDoctors);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(31, _c4, ctx.step === 2));
        \u0275\u0275advance(2);
        \u0275\u0275property("hidden", !(ctx.step === 2));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.label.OrderCreationDate);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
        \u0275\u0275property("matDatepicker", pickerFrom_r6)("max", ctx.toDate !== null ? ctx.toDate : ctx.commonService.getCurrentDate())("ngModelOptions", \u0275\u0275pureFunction0(33, _c5));
        \u0275\u0275advance(2);
        \u0275\u0275property("for", pickerFrom_r6);
        \u0275\u0275advance(5);
        \u0275\u0275property("matDatepicker", pickerTo_r7);
        \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
        \u0275\u0275property("min", ctx.fromDate)("max", ctx.commonService.getCurrentDate())("ngModelOptions", \u0275\u0275pureFunction0(34, _c5));
        \u0275\u0275advance(2);
        \u0275\u0275property("for", pickerTo_r7);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.label == null ? null : ctx.label.Status, " ");
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.radioselect);
        \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(35, _c5));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", null);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.label.All, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.dsAnalysisStatus);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.label.Apply, " ");
      }
    }, dependencies: [NgClass, NgForOf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, FormGroupDirective, FormControlName, MatLegacyFormField, MatLegacyPrefix, MatLegacyInput, MatLegacyButton, MatLegacySelect, MatLegacyOption, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, MatLegacyRadioGroup, MatLegacyRadioButton, MatLegacyTooltip], styles: ['\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.heading[_ngcontent-%COMP%] {\n  color: #585858;\n  margin-bottom: 10px;\n  font-size: 14px;\n  font-weight: bold;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.headingone[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 14px;\n}\n.clrall[_ngcontent-%COMP%] {\n  color: #0072ce !important;\n  font-family: "GothamNarrowBold", sans-serif;\n  cursor: pointer;\n  font-weight: bold;\n}\n.srch[_ngcontent-%COMP%] {\n  position: relative;\n  top: -5px;\n}\n.newtest[_ngcontent-%COMP%] {\n  min-width: 178px !important;\n}\n.completed[_ngcontent-%COMP%] {\n  background: #0eab1c;\n  height: 16px;\n  width: 16px;\n}\n.ordered[_ngcontent-%COMP%] {\n  background: #969696;\n  height: 16px;\n  width: 16px;\n}\n.received[_ngcontent-%COMP%] {\n  background: #ed8b00;\n  height: 16px;\n  width: 16px;\n}\n.processing[_ngcontent-%COMP%] {\n  background: #0072ce;\n  height: 16px;\n  width: 16px;\n}\n.atlab[_ngcontent-%COMP%] {\n  background: #ed8b00;\n  height: 16px;\n  width: 16px;\n}\n.cancelled[_ngcontent-%COMP%] {\n  background: red;\n  height: 16px;\n  width: 16px;\n}\n.filter-head[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-family: "GothamNarrowBold", sans-serif;\n  color: #585858;\n  margin-bottom: 12px;\n}\n.boll[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 15px;\n  width: 15px;\n  border-radius: 50px;\n  background: #2d68c4;\n  margin: -3px 2px;\n}\n.resp[_ngcontent-%COMP%], \n.respfilter[_ngcontent-%COMP%] {\n  display: none !important;\n}\n@media screen and (max-width: 767px) {\n  .resp.clse[_ngcontent-%COMP%] {\n    margin-right: 20px;\n    text-align: right;\n    font-weight: 700;\n    padding-top: 8px;\n    color: red;\n    font-size: 16px;\n  }\n  .respfilter[_ngcontent-%COMP%] {\n    padding: 0 20px 10px;\n    border-bottom: 1px solid #ccc;\n  }\n  .resp[_ngcontent-%COMP%], \n   .respfilter[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .respfilter[_ngcontent-%COMP%]   .filter-head[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    color: #2476ce;\n  }\n  .desk[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media screen and (min-width: 768px) and (max-width: 1024px) {\n  .resp.clse[_ngcontent-%COMP%] {\n    margin-right: 20px;\n    text-align: right;\n    font-weight: 700;\n    padding-top: 8px;\n    color: red;\n    font-size: 16px;\n  }\n  .mob-filter[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .resp[_ngcontent-%COMP%], \n   .respfilter[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .respfilter[_ngcontent-%COMP%]   .filter-head[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    color: #2476ce;\n  }\n  .respfilter[_ngcontent-%COMP%] {\n    padding: 0 20px 10px;\n    border-bottom: 1px solid #ccc;\n  }\n  .ipadfiler[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n@media screen and (min-width: 800px) and (max-width: 1024px) {\n  .resp.clse[_ngcontent-%COMP%] {\n    margin-right: 20px;\n    text-align: right;\n    font-weight: 700;\n    padding-top: 8px;\n    color: red;\n    font-size: 16px;\n  }\n  .resp[_ngcontent-%COMP%], \n   .respfilter[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .respfilter[_ngcontent-%COMP%]   .filter-head[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    color: #2476ce;\n  }\n  .respfilter[_ngcontent-%COMP%] {\n    padding: 0 20px 10px;\n    border-bottom: 1px solid #ccc;\n  }\n  .ipadfiler[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {\n  .resp.clse[_ngcontent-%COMP%] {\n    margin-right: 20px;\n    text-align: right;\n    font-weight: 700;\n    padding-top: 8px;\n    color: red;\n    font-size: 16px;\n  }\n  .resp[_ngcontent-%COMP%], \n   .respfilter[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .respfilter[_ngcontent-%COMP%]   .filter-head[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    color: #2476ce;\n  }\n  .respfilter[_ngcontent-%COMP%] {\n    padding: 0 20px 10px;\n    border-bottom: 1px solid #ccc;\n  }\n  .ipadfiler[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n  .mat-tooltip-panel {\n  margin-top: 10px;\n}\n  .mat-tooltip {\n  background-color: #fff;\n  color: #000 !important;\n  -webkit-box-shadow: 1px 1px 1px 1px rgba(209, 209, 209, 1);\n  -moz-box-shadow: 1px 1px 1px 1px rgba(209, 209, 209, 1);\n  box-shadow: 1px 1px 1px 1px rgba(209, 209, 209, 1);\n  position: relative;\n}\n  .mat-tooltip::after {\n  width: 0;\n  height: 0;\n  content: "";\n  position: absolute;\n  border-left: 0.5rem solid transparent;\n  border-right: 0.5rem solid transparent;\n  border-bottom: 0.5rem solid #ffffff;\n}\n  .mat-tooltip.below {\n  overflow: initial;\n  margin-top: 1rem;\n}\n  .mat-tooltip.below:after {\n  top: -0.5rem;\n  right: calc(50% - 0.5rem);\n  transform: rotate(0);\n}\nspan.status-info-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10PX;\n  right: -16px;\n}\n  .mat-radio-label-content {\n  position: relative;\n}\n@media only screen and (min-device-width: 810px) and (max-device-width: 1180px) and (orientation: landscape) {\n  .resp[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .respfilter[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .mob-filter[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .resp.clse[_ngcontent-%COMP%] {\n    margin-right: 20px;\n    text-align: right;\n    font-weight: 700;\n    padding-top: 8px;\n    color: red;\n    font-size: 16px;\n  }\n  .respfilter[_ngcontent-%COMP%]   .filter-head[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    color: #2476ce;\n  }\n  .respfilter[_ngcontent-%COMP%] {\n    padding: 0 20px 10px;\n    border-bottom: 1px solid #ccc;\n  }\n  .ipadfiler[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .closeall[_ngcontent-%COMP%] {\n    top: 4px;\n    right: -25px;\n  }\n}\n.toggle-accordion-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: none !important;\n}\n.updropdwn[_ngcontent-%COMP%] {\n  transform: rotate(-180deg) !important;\n}\n/*# sourceMappingURL=side-filter.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SideFilterComponent, { className: "SideFilterComponent", filePath: "src\\app\\modules\\refrence-lab\\orders\\side-filter\\side-filter.component.ts", lineNumber: 13 });
})();

// src/app/modules/refrence-lab/orders/orders.component.ts
var _c02 = () => ["/ups"];
var _c12 = (a0) => ({ "expandedall": a0 });
var _c22 = () => ["expandedDetail"];
var _c32 = (a0) => ({ "border-left": a0 });
var _c42 = (a0, a1, a2) => ({ complected: a0, arrived: a1, ammended: a2 });
var _c52 = (a0) => ({ "color": a0 });
function OrdersComponent_th_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 60);
    \u0275\u0275text(1, " Created ");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_td_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(2, _c32, "5px solid " + element_r3.ColorCode));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r3.DateReceivedStr, " ");
  }
}
function OrdersComponent_th_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 60);
    \u0275\u0275text(1, " Last Update ");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_td_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r4.LastUpdatedDateStr, " ");
  }
}
function OrdersComponent_th_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.label.OrderID, " ");
  }
}
function OrdersComponent_td_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 62)(1, "span")(2, "a", 63);
    \u0275\u0275listener("click", function OrdersComponent_td_58_Template_a_click_2_listener() {
      const element_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.downloadMainfest(element_r7));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(element_r7.OrderNumber);
  }
}
function OrdersComponent_th_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.label.AccessionID, " ");
  }
}
function OrdersComponent_td_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 62)(1, "span", 64)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(element_r8.AccessionNumber);
  }
}
function OrdersComponent_th_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 60);
    \u0275\u0275text(1, " Doctor Name ");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_td_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 62)(1, "span", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", element_r9.PhysicianName, " ");
  }
}
function OrdersComponent_th_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.label.PatientID, " ");
  }
}
function OrdersComponent_td_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r10.PatientId, " ");
  }
}
function OrdersComponent_th_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.label.PatientName, " ");
  }
}
function OrdersComponent_td_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r11.PatientName, " ");
  }
}
function OrdersComponent_th_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.label.OwnerName, " ");
  }
}
function OrdersComponent_td_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r12.OwnerName, " ");
  }
}
function OrdersComponent_th_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.label.Species, " ");
  }
}
function OrdersComponent_td_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r13.SpeciesName, " ");
  }
}
function OrdersComponent_th_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 65);
  }
}
function OrdersComponent_td_79_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function OrdersComponent_td_79_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const element_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.getRecords(element_r16));
    });
    \u0275\u0275text(1, " Add a Panel/Test ");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_td_79_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 71);
    \u0275\u0275listener("click", function OrdersComponent_td_79_ng_container_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const element_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.goToConsultation(element_r16));
    });
    \u0275\u0275text(2, " Request a Consult ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function OrdersComponent_td_79_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function OrdersComponent_td_79_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const element_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.downloadAccessionResult(element_r16));
    });
    \u0275\u0275text(1, " View Accession Result pdf ");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_td_79_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function OrdersComponent_td_79_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const element_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.downloadMainfest(element_r16));
    });
    \u0275\u0275text(1, " View Requisition Form ");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_td_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 62)(1, "div", 66)(2, "button", 67);
    \u0275\u0275listener("click", function OrdersComponent_td_79_Template_button_click_2_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(3, " Actions ");
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "keyboard_arrow_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-menu", 68, 1);
    \u0275\u0275template(8, OrdersComponent_td_79_button_8_Template, 2, 0, "button", 69)(9, OrdersComponent_td_79_ng_container_9_Template, 3, 0, "ng-container", 70)(10, OrdersComponent_td_79_button_10_Template, 2, 0, "button", 69)(11, OrdersComponent_td_79_button_11_Template, 2, 0, "button", 69);
    \u0275\u0275elementStart(12, "button", 71);
    \u0275\u0275listener("click", function OrdersComponent_td_79_Template_button_click_12_listener() {
      const element_r16 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openNote(element_r16));
    });
    \u0275\u0275text(13, " View Accession Notes ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    const beforeMenu_r20 = \u0275\u0275reference(7);
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", beforeMenu_r20);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", element_r16.OrderNumber && element_r16.AccessionNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r4.isBackOfficeUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", element_r16.AccessionNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", element_r16.OrderNumber);
  }
}
function OrdersComponent_td_81_div_3_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 94)(1, "span", 95);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "/");
    \u0275\u0275elementStart(4, "span", 95);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subEle_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(4, _c52, subEle_r22.HighCount ? "red" : "black"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subEle_r22.HighCount ? subEle_r22.HighCount : "--", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(6, _c52, subEle_r22.LowCount ? "blue" : "black"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subEle_r22.LowCount ? subEle_r22.LowCount : "--");
  }
}
function OrdersComponent_td_81_div_3_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subEle_r22 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("float-left statusCode ", ctx_r4.commonService.ACPStatusCodeShow(subEle_r22.StatusCode), "");
    \u0275\u0275propertyInterpolate("title", ctx_r4.resultLabels[subEle_r22.StatusName]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.commonService.ACPStatusCodeShow(subEle_r22.StatusCode), " ");
  }
}
function OrdersComponent_td_81_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "mat-card", 77)(2, "div", 78)(3, "span", 79);
    \u0275\u0275listener("click", function OrdersComponent_td_81_div_3_Template_span_click_3_listener() {
      const subEle_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r22 = \u0275\u0275nextContext();
      const element_r24 = ctx_r22.$implicit;
      const i_r25 = ctx_r22.dataIndex;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.goToAccessionDetails(i_r25, element_r24, subEle_r22));
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 80);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 81)(8, "span", 82)(9, "span");
    \u0275\u0275element(10, "img", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span")(12, "span", 84)(13, "span", 85);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "span", 86)(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, OrdersComponent_td_81_div_3_span_19_Template, 6, 8, "span", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "span", 88);
    \u0275\u0275template(21, OrdersComponent_td_81_div_3_span_21_Template, 2, 5, "span", 89);
    \u0275\u0275elementStart(22, "span", 90);
    \u0275\u0275listener("click", function OrdersComponent_td_81_div_3_Template_span_click_22_listener() {
      const subEle_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r22 = \u0275\u0275nextContext();
      const element_r24 = ctx_r22.$implicit;
      const i_r25 = ctx_r22.dataIndex;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.goToAccessionDetails(i_r25, element_r24, subEle_r22));
    });
    \u0275\u0275elementStart(23, "button", 91)(24, "mat-icon", 92);
    \u0275\u0275text(25, "keyboard_arrow_right");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275element(26, "div", 93);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const subEle_r22 = ctx.$implicit;
    const element_r24 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(12, _c32, "3px solid " + subEle_r22.ColorCode));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(14, _c42, subEle_r22.AnalysisStatusName === "Completed", subEle_r22.AnalysisStatusName === "Arrived", subEle_r22.AnalysisStatusName === "Ammended"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", subEle_r22.AnalysisTypeName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", subEle_r22.DateReceivedStr, " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r4.label.RefLab, " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", element_r24.PhysicianName ? element_r24.PhysicianName : "label.None");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r4.label.Doctor, ":");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r24.PhysicianName ? element_r24.PhysicianName : "label.None", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", subEle_r22.AnalysisSourceId === 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", subEle_r22.SourceType === "ReferenceLab" && ctx_r4.commonService.ACPText(subEle_r22));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(18, _c42, subEle_r22.AnalysisStatusName === "Completed", subEle_r22.AnalysisStatusName === "Arrived", subEle_r22.AnalysisStatusName === "Ammended"));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(22, _c42, subEle_r22.AnalysisStatusName === "Completed", subEle_r22.AnalysisStatusName === "Arrived", subEle_r22.AnalysisStatusName === "Ammended"));
  }
}
function OrdersComponent_td_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 72)(1, "div", 73)(2, "div", 74);
    \u0275\u0275template(3, OrdersComponent_td_81_div_3_Template, 27, 26, "div", 75);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const element_r24 = ctx.$implicit;
    const i_r25 = ctx.dataIndex;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275attribute("colspan", ctx_r4.columnsToDisplay.length);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("id", "row", i_r25, "");
    \u0275\u0275property("@detailExpand", i_r25 === ctx_r4.expandedElement || ctx_r4.allRowsExpanded ? "expanded" : "collapsed");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", element_r24.preDetails || element_r24.Details);
  }
}
function OrdersComponent_tr_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 97);
  }
}
function OrdersComponent_tr_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 98);
    \u0275\u0275listener("click", function OrdersComponent_tr_83_Template_tr_click_0_listener() {
      const i_r27 = \u0275\u0275restoreView(_r26).dataIndex;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.selectedRow(i_r27));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r28 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("example-expanded-row", ctx_r4.expandedElement === element_r28);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(3, _c32, "5px solid " + element_r28.ColorCode));
  }
}
function OrdersComponent_tr_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 99);
  }
  if (rf & 2) {
    const row_r29 = ctx.$implicit;
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(1, _c32, "5px solid " + row_r29.ColorCode));
  }
}
function OrdersComponent_tbody_86_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1, "No records found. Please review your filter criteria.");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_tbody_86_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1, "No records found.");
    \u0275\u0275elementEnd();
  }
}
function OrdersComponent_tbody_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tbody", 100)(1, "tr");
    \u0275\u0275template(2, OrdersComponent_tbody_86_span_2_Template, 2, 0, "span", 101)(3, OrdersComponent_tbody_86_span_3_Template, 2, 0, "span", 101);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r4.orderParams.IsApplyFilter == true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.orderParams.IsApplyFilter == false);
  }
}
var OrdersComponent = class _OrdersComponent {
  constructor(refLabService, dataService, commonService, sidemenuService, fb, EncrDecr, headerService, patientService, labelService, sidefilterService, modalService, router, confirmationDialogService, fuseService, route, title, toastr) {
    this.refLabService = refLabService;
    this.dataService = dataService;
    this.commonService = commonService;
    this.sidemenuService = sidemenuService;
    this.fb = fb;
    this.EncrDecr = EncrDecr;
    this.headerService = headerService;
    this.patientService = patientService;
    this.labelService = labelService;
    this.sidefilterService = sidefilterService;
    this.modalService = modalService;
    this.router = router;
    this.confirmationDialogService = confirmationDialogService;
    this.fuseService = fuseService;
    this.route = route;
    this.title = title;
    this.toastr = toastr;
    this.allRowsExpanded = false;
    this.isAdvSearched = false;
    this.isNotificationSelected = false;
    this.recordCount = 0;
    this.originData = [];
    this.columnsToDisplay = ["DateReceived", "LastUpdatedDate", "OrderNumber", "AccessionNumber", "PhysicianName", "PatientId", "PatientName", "OwnerName", "SpeciesName", " "];
    this.dataSource = new MatLegacyTableDataSource();
    this.dsAnalysisSource = [];
    this.selectedAnalysisSource = "All";
    this.analysisSrcId = EnmAnalysisSource.POC;
    this.sortState = {
      active: "lastUpdatedDate",
      direction: "desc"
    };
    this.start = 0;
    this.limit = 15;
    this.end = this.limit + this.start;
    this.pageNo = 1;
    this.bckBusinessInfo = JSON.parse(localStorage.getItem("bckBusinessInfo"));
    this.FromDateLabel = new Date(this.commonService.twoYearBeforeFromToday);
    this.ToDateLabel = this.commonService.today;
    this.authDetails = this.dataService.appData.authDetails;
    this.isBackOfficeUser = this.dataService.appData.authDetails["BackOfficeFlag"];
    this.isReflabActive = this.authDetails["IsReflabActive"];
    this.orderParams = new OrderParams();
    this.refLAbClinicId = this.dataService.appData.authDetails["BackOfficeFlag"] && this.bckBusinessInfo ? this.bckBusinessInfo["RefLabClinicId"] : this.dataService.appData.authDetails["RefLabClinicId"];
    this.orderParams.UserGuid = this.dataService.appData.authDetails["UserGuid"];
    this.orderParams.BusinessGuid = this.dataService.appData.authDetails["BusinessGuid"];
    this.orderParams.LanguageId = EnmLanguage.English;
    this.orderParams.IsBackOfficeUser = this.isBackOfficeUser;
    this.sidemenuService.selectedModuleId = EnmModule.orders;
    this.labelService.getOrdersScreenLabels();
    this.label = this.labelService.ordersScreen;
    this.resultLabels = this.labelService.dsAnaysisResultsScreen;
    this.selectedAnalysisSource = this.label.All;
    this.commonService.SetLocaleForDate();
    this.dataService.page.subscribe((updatedData) => {
      this.dataService.pageState.orders.sortState.active = "LastUpdatedDate";
      this.dataService.pageState.orders.sortState.direction = "desc";
      this.sortState = this.dataService.pageState.orders.sortState;
      this.expandedElement = updatedData.orders.selectedRow;
    });
    if (localStorage.getItem("alert-popup") == "true") {
      this.modalService.open(AlertMessageComponent, {
        centered: true,
        backdrop: "static",
        scrollable: false
      });
    }
    this.BusinessGuid = this.dataService.appData.authDetails["BusinessGuid"];
    this.willcallPageId = this.dataService.appData?.helpTopics?.find((ele) => ele.HelpTopic == "Will-Call")?.PageID || "1140";
  }
  checkReflabActive(actionName) {
    this.fuseService.getClinicDetails(this.refLAbClinicId, this.BusinessGuid).subscribe({
      next: (data) => {
        this.isReflabActive = data.ResponseData["is_active"] == "true" ? true : false;
        if (this.isReflabActive && actionName == "createOrder") {
          this.router.navigate(["/refLab/createOrder"]);
        } else if (this.isReflabActive && actionName == "addOnPanel") {
          this.router.navigateByUrl("/refLab/addOrder?prev=order");
        } else {
          const msg = constant.consultRestrictionPopupMsg;
          this.confirmationDialogService.confirm("Alert", msg, "Dismiss", "Cancel", "sm", true, false);
        }
      },
      error: () => {
        this.toastr.error(this.labelService.dsFuseManagementScreen.AddRefLabAccountRespErrorMessage);
      }
    });
  }
  openNote(ele, sub, e) {
    if (e == "Test") {
      this.testNotes = sub.PanelNote;
    } else if (e == void 0) {
      this.testNotes = ele.OrderNote;
    }
    const heading = e == "Test" ? `${sub.AnalysisTypeName ? sub.AnalysisTypeName : ""}${sub.AnalysisTypeId ? " #" + sub.AnalysisTypeId : ""}` : `${ele.PatientName ? ele.PatientName : ""}${ele.OrderNumber ? " #" + ele.OrderNumber : ""}`;
    const note = {
      heading,
      title: this.label.AdditionalNotes,
      text: this.testNotes ? this.testNotes : `No notes found`,
      // subtext: subEle.Notes ? ele.Notes : ``,
      // testName: subEle.TestName,
      btnText: this.label.Ok
    };
    const modalRef = this.modalService.open(NoteContentComponent);
    modalRef.componentInstance.note = note;
  }
  toggle() {
    this.allRowsExpanded = !this.allRowsExpanded;
    this.expandedElement = null;
  }
  scrolltoTop(topVal) {
    const scrollabe = document.getElementById("ordersTbl-scrollabe");
    if (scrollabe)
      scrollabe.scrollTop = topVal;
  }
  onTableScroll(e) {
    const tableViewHeight = e.target.offsetHeight;
    const tableScrollHeight = e.target.scrollHeight;
    const scrollLocation = e.target.scrollTop;
    const buffer = 200;
    const limit = tableScrollHeight - tableViewHeight - buffer;
    if (!this.isLoadMore && scrollLocation > limit) {
      this.isLoadMore = true;
      this.pageNo++;
      this.orderParams.PageNo = this.pageNo;
      this.orderParams.IsBackOfficeUser = this.isBackOfficeUser;
      this.dataService.pageState.orders.filterParams = this.orderParams;
      this.dataService.page.next(this.dataService.pageState);
      this.getOrderList(this.orderParams);
    }
  }
  getOrderList(event) {
    if (this.dataService.pageState?.orders?.filterParams?.["FromDate"]) {
      this.FromDateLabel = this.dataService.pageState.orders.filterParams["FromDate"];
    } else {
      this.FromDateLabel = new Date(this.commonService.twoYearBeforeFromToday);
    }
    if (this.dataService.pageState?.orders?.filterParams?.["ToDate"]) {
      this.ToDateLabel = this.dataService.pageState.orders.filterParams["ToDate"];
    } else {
      this.ToDateLabel = this.commonService.today;
    }
    this.orderParams = event ? event : this.orderParams;
    this.pageNo = this.orderParams.PageNo;
    const params = Object.assign({}, this.orderParams);
    if (params.FromDate) {
      params.FromDate = params.FromDate != null ? this.commonService.getMomentFromDateTime(params.FromDate) : null;
    }
    if (params.ToDate) {
      params.ToDate = params.ToDate != null ? this.commonService.getMomentToDateTime(params.ToDate) : null;
    }
    if (params.PhysicianName && params.PhysicianName.length && typeof params.PhysicianName != "string") {
      params.PhysicianName = params.PhysicianName.toString();
    }
    if (this.sideFilter?.filteredDoctors && params?.PhysicianName != null) {
      const selectedPhysician = params?.PhysicianName.length ? params?.PhysicianName?.split(",") : [];
      const selectedDr = selectedPhysician.map((selectedId) => {
        const doc = this.sideFilter?.filteredDoctors.find((doctor) => doctor.Id === selectedId);
        return doc ? `${doc.FirstName} ${doc.LastName}` : "";
      });
      params.PhysicianName = selectedDr.length > 0 ? selectedDr.join() : "";
    }
    this.refLabService.getOrderLList(params).subscribe((res) => {
      let respData = [];
      if (this.orderParams.PageNo == 1) {
        this.headerService.searchText = "";
        this.originData = [];
        respData = res.ResponseData.OrderPatientList || [];
      } else {
        respData = res.ResponseData.OrderPatientList;
      }
      if (respData && respData.length > 0) {
        this.originData = this.originData.concat(respData);
        if (this.isLoadMore) {
          this.isLoadMore = false;
        } else {
          this.scrolltoTop(null);
        }
      }
      if (this.originData.length > 0) {
        this.dataService.pageState.orders.resultsList = this.originData;
        this.dataService.page.next(this.dataService.pageState);
        this.dataSource = new MatLegacyTableDataSource(this.originData);
        this.dataSource.sortingDataAccessor = this.commonService.sortingDataAccessor;
        this.dataSource.sort = this.sort;
      } else {
        this.originData = [];
        this.dataSource.data = [];
      }
    }, (err) => {
      console.log(JSON.stringify(err));
      this.originData = [];
      this.dataSource.data = [];
      this.dataSource = null;
    });
  }
  downloadMainfest(ele) {
    this.refLabService.downloadableMainfest(ele.OrderNumber, this.BusinessGuid).subscribe((res) => {
      const blob = new Blob([res], { type: "application/pdf" });
      const objectURL = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = objectURL;
      a.target = "_blank";
      a.click();
    }, (err) => {
      console.log(JSON.stringify(err));
      if (err.status == 500) {
        this.confirmationDialogService.confirm("Alert", "Something went wrong, Plsease try again", "Ok", "Cancel", "sm", true, false);
      }
    });
  }
  downloadAccessionResult(ele) {
    if (ele.AccessionNumber != null) {
      this.refLabService.downloadableAccession(ele.AccessionNumber, this.BusinessGuid).subscribe((res) => {
        debugger;
        console.log(res, "responce");
        const blob = new Blob([res], { type: "application/pdf" });
        const objectURL = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = objectURL;
        a.target = "_blank";
        a.click();
      }, (err) => {
        console.log(JSON.stringify(err));
        this.confirmationDialogService.confirm("", "No accession result pdf available", "OK", "Cancel", "sm", true, false).then((confirmed) => {
          console.log(confirmed);
        });
      });
    } else {
      this.confirmationDialogService.confirm("", "No accession result pdf available", "OK", "Cancel", "sm", true, false).then((confirmed) => {
        console.log(confirmed);
      });
    }
  }
  onDataSort(event) {
    this.sortState = event;
    this.dataService.pageState.orders.sortState = event;
    this.dataService.page.next(this.dataService.pageState);
    this.scrolltoTop(null);
  }
  ngOnInit() {
    const refresh = this.route.snapshot.queryParamMap.get("refresh");
    this.title.setTitle("ZoetisDx | Orders");
    this.closeFilterRegister();
    if (refresh) {
      this.getOrderList();
      this.router.navigate([]);
    } else if (!refresh && this.dataService.pageState.orders.resultsList.length > 0) {
      this.originData = this.dataService.pageState.orders.resultsList;
      this.dataSource = new MatLegacyTableDataSource(this.originData);
      this.sortState = this.dataService.pageState.orders.sortState;
      this.sort.sort({ id: this.sortState.active, start: this.sortState.direction });
      this.dataSource.sort = this.sort;
    }
    this.helpObj = this.dataService.appData.helpTopics.find((e) => e.HelpTopic == "Orders");
  }
  ngAfterViewInit() {
    if (this.dataService.pageState.orders.resultsList.length > 0) {
      setTimeout(() => {
        this.expandedElement = this.dataService.pageState.orders.selectedRow;
        const elmnt = document.getElementById("row" + this.expandedElement);
        if (elmnt)
          elmnt.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
      }, 2e3);
    }
  }
  getPatientList() {
    if (this.dataService.pageState.dashboard.selectedRow) {
      const expandedRowDetails = this.dataService.pageState.dashboard.selectedRow;
      this.expandedElement = this.originData.find((x) => x.Id == expandedRowDetails.Id && x.PatientId == expandedRowDetails.PatientId && x.PatientName == expandedRowDetails.PatientName && x.dob == expandedRowDetails.dob && x.owner_id == expandedRowDetails.owner_id);
    }
  }
  showMsg(cancelComment) {
    if (cancelComment && /user.cancelled/.test(cancelComment)) {
      cancelComment = cancelComment.split(":")[1];
    } else if (cancelComment && /11 :/.test(cancelComment)) {
      cancelComment = cancelComment.split(":")[1];
    } else if (cancelComment && /X :/.test(cancelComment)) {
      cancelComment = cancelComment.split(":")[1];
    } else {
      cancelComment = cancelComment ? cancelComment : "This test has been canceled.";
    }
    this.confirmationDialogService.confirm("", cancelComment, this.labelService.dsDashboardScreen.Ok, "", "sm", true, false).then((confirmed) => {
      console.log(confirmed);
    }).catch(() => console.log("User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)"));
  }
  getRecords(ele) {
    this.dataService.appData.AccessionNumber = ele.AccessionNumber;
    this.dataService.data.next(this.dataService.appData);
    const daysDifference = this.commonService.getDaysDifference(ele.DateReceived, this.dataService.appData.serverDate);
    if (daysDifference > 7) {
      const msg = constant.addOnAccessionRestrictionPopupMsg;
      this.confirmationDialogService.confirm("Alert", msg, "Dismiss", "Cancel", "sm", true, false);
      return;
    }
    localStorage.setItem("lastOrderId", ele.OrderNumber);
    this.refLabService.dataRow = ele;
    this.checkReflabActive("addOnPanel");
  }
  selectedRow(rowIindex) {
    if (this.expandedElement == rowIindex) {
      this.expandedElement = null;
    } else {
      this.expandedElement = null;
      this.expandedElement = rowIindex;
    }
  }
  goToDetails(record) {
    this.router.navigateByUrl("/refLab/orders/details/" + record.OrderNumber);
  }
  gotToResultDetails(rowIindex, ele, subEle) {
    gtag("event", "Orders_Page", {
      Total_Orders: "",
      Total_Unique_Orders: "",
      Order_Date: ele.DateReceivedStr,
      Order_ID: ele.OrderNumber,
      Assecion_ID: ele.AccessionNumber,
      Doctor_Name: ele.PhysicianName,
      Patient_ID: ele.PatientId,
      Patient_Name: ele.PatientName,
      Owner_Name: ele.OwnerName,
      Species: ele.SpeciesName
    });
    this.refLabService.dataRow = ele;
    this.expandedElement = rowIindex;
    this.dataService.pageState.orders.selectedRow = rowIindex;
    if (subEle.AnalysisStatusName == "Canceled" || subEle.AnalysisStatusName == null) {
      this.showMsg(subEle.cancelComment);
    } else if (subEle.AnalysisStatusName == "Processing") {
      this.showMsg("This order has been transmitted to and accepted by the reference lab and is being processed.");
    } else if (subEle.AnalysisStatusName == "Received") {
      this.showMsg("This test has been Received.");
    } else if (subEle.AnalysisStatusName == "Submitted") {
      this.showMsg("This test has been Submitted.");
    } else if (subEle.AnalysisStatusName == "Pending") {
      this.showMsg("This order has been transmitted to and accepted by the reference lab and is being processed.");
    } else if (subEle.AnalysisStatusName == "Completed" || subEle.AnalysisStatusName == "Ammended" || subEle.AnalysisStatusName == "Arrived") {
      this.dataService.pageState.orders.filterParams = this.orderParams;
      this.dataService.pageState.orders.resultsList = this.originData;
      this.dataService.pageState.orders.sortState = this.sortState;
      this.patientService.showPataientTestResult(ele, subEle, this.headerService.filter, this.sidefilterService.filter, this.sort.active, this.sort.direction);
    }
    this.dataService.page.next(this.dataService.pageState);
  }
  goToConsultation(e) {
    debugger;
    const emailId = this.bckBusinessInfo ? this.bckBusinessInfo["EmailId"] : "";
    let urlStr = "email=" + JSON.parse(localStorage.authDetails).Email + "&bkoClinicEmail=" + emailId + "&token=" + JSON.parse(localStorage.authDetails).access_token + "&refresh_token=" + JSON.parse(localStorage.authDetails).refresh_token + "&deviceId=" + localStorage.UIGuid + "&BusinessGuid=" + JSON.parse(localStorage.authDetails).BusinessGuid + "&clinicname=" + JSON.parse(localStorage.authDetails).BusinessName + "&clinicphone=" + JSON.parse(localStorage.authDetails).BusinessPhoneNo + "&doctorname=" + e.PhysicianName + "&patientId=" + e.PatientId + "&ZDXPatientId=" + e.ZDXPatientId + "&patientName=" + e.PatientName + "&species=" + e.SpeciesName + "&breed=" + e.BreedName + "&ownerName=" + e.OwnerName + "&accessionId=" + e.AccessionNumber + "&gender=" + e.Gender + "&age=" + e.Dob + "&Isbackoffice=" + JSON.parse(localStorage.authDetails).BackOfficeFlag + "&backUrl=" + location.href + "&isNewInternal=" + this.commonService.isnewUrlRedirection() + "&ZDxUrl=" + this.commonService.getZDxUrl();
    urlStr = this.EncrDecr.encrypt(urlStr);
    if (this.headerService.isNRP) {
      this.commonService.getRedirectionKey({ "ValueString": urlStr }).subscribe((data) => {
        window.location.href = environment.ZCSUrl + "#/user/consultation-request?ref=" + data.ResponseData;
      }, (err) => {
        console.log(JSON.stringify(err));
        this.commonService.showCommonToastrError();
      });
    } else {
      this.commonService.getEncryptDetail({ toEncryptStr: urlStr }).subscribe((res) => {
        window.location.href = environment.ZCSUrl + "#/user/consultation-request?ref=" + res.ResponseData.encryptedKey;
      }, (err) => {
        console.log(JSON.stringify(err));
        this.commonService.showCommonToastrError();
      });
    }
  }
  // public goToConsultation(e) {
  //   e.stopPropagation();
  //   const params = {
  //     email: JSON.parse(localStorage.authDetails).Email,
  //     token: JSON.parse(localStorage.authDetails).access_token,
  //     clinicname: JSON.parse(localStorage.authDetails).BusinessName,
  //     clinicphone: JSON.parse(localStorage.authDetails).BusinessPhoneNo,
  //     doctorname: e.PhysicianName,
  //     patientId: e.PatientId,
  //     patientName: e.PatientName,
  //     species: e.SpeciesName,
  //     breed: e.BreedName,
  //     acessionId: e.AccessionNumber,
  //     backUrl: location.href
  //   }
  //   let paramsStr = this.EncrDecr.encrypt(JSON.stringify(params)); // JSON.stringify(params)
  //   this.commonService.getEncryptDetail({ toEncryptStr: paramsStr }).subscribe(res => {
  //
  //     console.log(res);
  //     let encryptedObj = res.ResponseData.encryptedKey;
  //     window.location.href = environment.ZCSUrl + "#/consultation-request?ref=" + encryptedObj;
  //   }, err => {
  //     console.log(JSON.stringify(err));
  //   });
  // }
  markAs(elem, as) {
    if (this.commonService.isInternalUsers()) {
      const req = {
        BusinessGuid: this.dataService.appData.authDetails["BusinessGuId"],
        UserGuid: this.dataService.appData.authDetails["UserGuid"],
        ObjResultTagModel: [
          {
            Source: elem.SourceType,
            ResultIds: elem.RecID,
            Tag: as
          }
        ]
      };
      this.commonService.UpdateResultTag(req).subscribe(() => {
        elem.ViewedFlag = as == "READ";
      });
    }
  }
  goToAccessionDetails(rowIindex, ele, subEle) {
    if (subEle.AnalysisStatusName == "Ordered") {
      return this.showMsg("This order has been transmitted to and accepted by the reference lab and is being processed.");
    }
    gtag("event", "Orders_Page", {
      Total_Orders: "",
      Total_Unique_Orders: "",
      Order_Date: ele.DateReceivedStr,
      Order_ID: ele.OrderNumber,
      Assecion_ID: ele.AccessionNumber,
      Doctor_Name: ele.PhysicianName,
      Patient_ID: ele.PatientId,
      Patient_Name: ele.PatientName,
      Owner_Name: ele.OwnerName,
      Species: ele.SpeciesName
    });
    this.refLabService.dataRow = ele;
    this.expandedElement = rowIindex;
    this.dataService.pageState.orders.selectedRow = rowIindex;
    this.dataService.pageState.orders.filterParams = this.orderParams;
    this.dataService.pageState.orders.resultsList = this.originData;
    this.dataService.pageState.orders.sortState = this.sortState;
    if (subEle.AnalysisStatusName == "Canceled" || subEle.AnalysisStatusName == null) {
      this.showMsg(subEle.CancelComment);
    } else if (subEle.AnalysisStatusName == "Processing") {
      this.showMsg("This order has been transmitted to and accepted by the reference lab and is being processed.");
    } else if (subEle.AnalysisStatusName == "Received") {
      this.showMsg("This test has been Received.");
    } else if (subEle.AnalysisStatusName == "Submitted") {
      this.showMsg("This test has been Submitted.");
    } else if (subEle.AnalysisStatusName == "Ordered") {
      this.showMsg("This order has been transmitted to and accepted by the reference lab and is being processed.");
    } else {
      this.dataService.appState.selectedResult.element = ele;
      this.dataService.appState.selectedResult.subElement = subEle;
      this.dataService.state.next(this.dataService.appState);
      this.markAs(subEle, "READ");
      this.patientService.showAccessionResult(ele, subEle.AccessionNumber, this.headerService.filter, this.sidefilterService.filter, this.sort.active, this.sort.direction);
    }
    this.dataService.page.next(this.dataService.pageState);
  }
  closeFilterRegister() {
    this.commonService.closeFilterForPatient.subscribe((ev) => {
      if (ev) {
        this.drawer.close();
      }
    });
  }
  static {
    this.\u0275fac = function OrdersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrdersComponent)(\u0275\u0275directiveInject(RefLabService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(SidemenuService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(EncrDecrService), \u0275\u0275directiveInject(HeaderService), \u0275\u0275directiveInject(PatientService), \u0275\u0275directiveInject(LabelService), \u0275\u0275directiveInject(SidefilterService), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ConfirmationDialogService), \u0275\u0275directiveInject(FuseService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrdersComponent, selectors: [["app-orders"]], viewQuery: function OrdersComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(SideFilterComponent, 5);
        \u0275\u0275viewQuery(MatSort, 7);
        \u0275\u0275viewQuery(MatDrawer, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sideFilter = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.drawer = _t.first);
      }
    }, decls: 89, vars: 20, consts: [["drawer", ""], ["beforeMenu", "matMenu"], ["hasBackdrop", "true", 1, "example-container1"], ["mode", "over", "position", "end", 1, "example-sidenav", "sidefilter", "right-filter"], [3, "outFilterBy"], [1, "example-sidenav-content", "w-100", "sidefilter", "dashboard"], [1, "left-block"], [1, "title-container", "icon-cont"], [1, "page-title"], ["src", "../../../assets/img/help-icon.svg", "matTooltipPosition", "below", "matTooltipClass", "below", "alt", "help-circle", 1, "iconquestion", 3, "click", "matTooltip"], [1, "d-flex", "justify-content-end", "pt-2", "pr-3", "align-items-center", "toprow", "mobhead"], [1, "orderTitle"], [1, "d-flex", "filterMob"], [1, "ipadfiler", "align-items-center", "pr-2"], ["type", "button", "mat-button", "", 1, "pr-0", 3, "click"], ["src", "../../../assets/img/filterIcon@2x.png", "alt", "filterIcon", 1, "filtericon"], ["src", "../../../assets/img/help-circle.svg", "matTooltip", "Help", "alt", "help-circle", "matTooltipPosition", "below", "matTooltipClass", "below", 1, "qpart", "qicon", 3, "click"], [1, "p-0", "mcontent"], [1, "mt-0", "d-flex", "flex-row-reverse", "align-items-right", "w-100"], [1, "d-flex", "flex-row-reverse", "pt-3", "pl-3", "pr-4", "align-items-right", "w-100", "toprow"], [1, "d-flex", "flex-wrap", "justify-content-start", "mt-0", "orderBtn"], [1, "cbtn"], ["mat-raised-button", "", "color", "warn", "target", "_blank", 1, "create-btn", 2, "margin-right", "14px", "text-decoration", "none", 3, "routerLink"], ["mat-raised-button", "", "color", "warn", 1, "create-btn", 2, "margin-right", "14px", 3, "click"], ["mat-raised-button", "", "target", "_blank", 1, "create-btn", "policy-btn", 3, "click"], ["mat-raised-button", "", "target", "_blank", 1, "create-btn", "policy-btn", "will-call", 3, "click"], ["src", "assets/img/will_call.svg", "alt", "Will Call", 2, "padding-right", "3px"], [1, "mt-0", "d-flex", "justify-content-between", "align-items-center", "w-100"], [1, "p-0", "pt-2", "cust-postion", "w-100"], [1, "d-flex1", "justify-content-between", "mb-1", "d-none"], [1, "filter-txt"], ["id", "ordersTbl-scrollabe", 1, "example-container", "usermangemt", "tableRow", "pt-0", "dos"], ["mat-raised-button", "", 1, "closeall", 3, "click", "ngClass"], ["src", "../../../assets/img/expandall.png ", "alt", ""], [1, "pr-3", 2, "text-align", "right", "margin", "0.3rem 0 0.5rem 0"], [2, "font-weight", "bold"], [1, "orderTable", 3, "scroll"], ["mat-table", "", "summary", "", "multiTemplateDataRows", "", "matSort", "", 1, "dashboard-table", "t1", 3, "matSortChange", "dataSource", "matSortActive", "matSortDirection"], ["matColumnDef", "DateReceived"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngStyle", 4, "matCellDef"], ["matColumnDef", "LastUpdatedDate"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "OrderNumber"], ["matColumnDef", "AccessionNumber"], ["matColumnDef", "PhysicianName"], ["matColumnDef", "PatientId"], ["matColumnDef", "PatientName"], ["matColumnDef", "OwnerName"], ["matColumnDef", "SpeciesName"], ["matColumnDef", " "], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", "td", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "example-element-row", 3, "ngStyle", "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 3, "ngStyle", 4, "matRowDef", "matRowDefColumns"], [1, "noresult"], ["class", "norecord", 4, "ngIf"], [1, "right-filter", "pl-0"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 3, "ngStyle"], ["mat-cell", ""], ["href", "javascript:void(0);", 3, "click"], [1, "bluetext"], ["mat-header-cell", ""], [1, "d-flex", "align-items-center", "justify-content-end", "iconprt"], ["mat-icon-button", "", 3, "click", "matMenuTriggerFor"], ["xPosition", "before", 1, "order-action"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], [4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["mat-cell", "", "td", ""], [1, "example-element-detail", 3, "id"], [1, "row", "pt-4", "pb-4", "card-block", "w-100"], ["class", "col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-sm-4"], [1, "matcard", 3, "ngStyle"], [1, "d-flex", "justify-content-between", "align-items-top"], [1, "card-head", 3, "click", "ngClass"], [1, "card-date"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "cardimg", "text-left", 2, "overflow", "hidden"], ["src", "../../../assets/img/lab-icon@2x.png", "alt", "", "height", "30", 1, "mr-2", "ng-star-inserted"], [1, "card-head_dvn_name", "d-flex", "w-100"], [1, "ref"], [1, "doc", "elipsis", 3, "title"], ["class", "ml-2", 4, "ngIf"], [2, "min-width", "72px"], ["style", "cursor: pointer;margin-top: 6px;padding: 0px 5px;", 3, "title", "class", 4, "ngIf"], [3, "click"], ["mat-icon-button", "", "aria-label", "right arrow", 3, "ngClass"], [3, "ngClass"], [1, "d-flex", "justify-content-start", "align-items-center"], [1, "ml-2"], [3, "ngStyle"], [2, "cursor", "pointer", "margin-top", "6px", "padding", "0px 5px", 3, "title"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click", "ngStyle"], ["mat-row", "", 1, "example-detail-row", 3, "ngStyle"], [1, "norecord"], ["style", "margin-top: 35px;", 4, "ngIf"], [2, "margin-top", "35px"]], template: function OrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "mat-drawer-container", 2)(1, "mat-drawer", 3, 0)(3, "app-side-filter", 4);
        \u0275\u0275listener("outFilterBy", function OrdersComponent_Template_app_side_filter_outFilterBy_3_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.getOrderList($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 5)(5, "div", 6)(6, "section", 7)(7, "span", 8);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "img", 9);
        \u0275\u0275listener("click", function OrdersComponent_Template_img_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.commonService.onlineHelp(ctx.helpObj.PageID));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 10)(11, "span", 11);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 12)(14, "span", 13)(15, "button", 14);
        \u0275\u0275listener("click", function OrdersComponent_Template_button_click_15_listener() {
          \u0275\u0275restoreView(_r1);
          const drawer_r2 = \u0275\u0275reference(2);
          return \u0275\u0275resetView(drawer_r2.toggle());
        });
        \u0275\u0275element(16, "img", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "img", 16);
        \u0275\u0275listener("click", function OrdersComponent_Template_img_click_17_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.commonService.onlineHelp(ctx.helpObj.PageID));
        });
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(18, "mat-card", 17)(19, "div", 18)(20, "div", 19)(21, "span", 20)(22, "div", 21)(23, "a", 22);
        \u0275\u0275text(24, " Create a UPS Shipping Label ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "button", 23);
        \u0275\u0275listener("click", function OrdersComponent_Template_button_click_25_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.checkReflabActive("createOrder"));
        });
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "a", 24);
        \u0275\u0275listener("click", function OrdersComponent_Template_a_click_27_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.commonService.onlineHelp(1044));
        });
        \u0275\u0275text(28, " ZRL Policies ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "a", 25);
        \u0275\u0275listener("click", function OrdersComponent_Template_a_click_29_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.commonService.onlineHelp(ctx.willcallPageId));
        });
        \u0275\u0275element(30, "img", 26);
        \u0275\u0275text(31, " Schedule Pickup ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(32, "div", 27)(33, "div", 28)(34, "div")(35, "div", 29);
        \u0275\u0275element(36, "div", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 31)(38, "button", 32);
        \u0275\u0275listener("click", function OrdersComponent_Template_button_click_38_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggle());
        });
        \u0275\u0275element(39, "img", 33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "p", 34)(41, "span");
        \u0275\u0275text(42, " Showing results for ");
        \u0275\u0275elementStart(43, "span", 35);
        \u0275\u0275text(44);
        \u0275\u0275elementEnd();
        \u0275\u0275text(45, " to ");
        \u0275\u0275elementStart(46, "span", 35);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "div", 36);
        \u0275\u0275listener("scroll", function OrdersComponent_Template_div_scroll_48_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onTableScroll($event));
        });
        \u0275\u0275elementStart(49, "table", 37);
        \u0275\u0275listener("matSortChange", function OrdersComponent_Template_table_matSortChange_49_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onDataSort($event));
        });
        \u0275\u0275elementContainerStart(50, 38);
        \u0275\u0275template(51, OrdersComponent_th_51_Template, 2, 0, "th", 39)(52, OrdersComponent_td_52_Template, 2, 4, "td", 40);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(53, 41);
        \u0275\u0275template(54, OrdersComponent_th_54_Template, 2, 0, "th", 39)(55, OrdersComponent_td_55_Template, 2, 1, "td", 42);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(56, 43);
        \u0275\u0275template(57, OrdersComponent_th_57_Template, 2, 1, "th", 39)(58, OrdersComponent_td_58_Template, 4, 1, "td", 42);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(59, 44);
        \u0275\u0275template(60, OrdersComponent_th_60_Template, 2, 1, "th", 39)(61, OrdersComponent_td_61_Template, 4, 1, "td", 42);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(62, 45);
        \u0275\u0275template(63, OrdersComponent_th_63_Template, 2, 0, "th", 39)(64, OrdersComponent_td_64_Template, 3, 1, "td", 42);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(65, 46);
        \u0275\u0275template(66, OrdersComponent_th_66_Template, 2, 1, "th", 39)(67, OrdersComponent_td_67_Template, 2, 1, "td", 42);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(68, 47);
        \u0275\u0275template(69, OrdersComponent_th_69_Template, 2, 1, "th", 39)(70, OrdersComponent_td_70_Template, 2, 1, "td", 42);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(71, 48);
        \u0275\u0275template(72, OrdersComponent_th_72_Template, 2, 1, "th", 39)(73, OrdersComponent_td_73_Template, 2, 1, "td", 42);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(74, 49);
        \u0275\u0275template(75, OrdersComponent_th_75_Template, 2, 1, "th", 39)(76, OrdersComponent_td_76_Template, 2, 1, "td", 42);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(77, 50);
        \u0275\u0275template(78, OrdersComponent_th_78_Template, 1, 0, "th", 51)(79, OrdersComponent_td_79_Template, 14, 5, "td", 42);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(80, 52);
        \u0275\u0275template(81, OrdersComponent_td_81_Template, 4, 5, "td", 53);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(82, OrdersComponent_tr_82_Template, 1, 0, "tr", 54)(83, OrdersComponent_tr_83_Template, 1, 5, "tr", 55)(84, OrdersComponent_tr_84_Template, 1, 3, "tr", 56);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "div", 57);
        \u0275\u0275template(86, OrdersComponent_tbody_86_Template, 4, 2, "tbody", 58);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(87, "div", 59)(88, "app-side-filter", 4);
        \u0275\u0275listener("outFilterBy", function OrdersComponent_Template_app_side_filter_outFilterBy_88_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.getOrderList($event));
        });
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.label.Orders);
        \u0275\u0275advance();
        \u0275\u0275propertyInterpolate("matTooltip", ctx.labelService.dsSideMenuScreen.Help);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.label.Orders, "");
        \u0275\u0275advance(11);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(16, _c02));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.label.CreateNewOrder, " ");
        \u0275\u0275advance(12);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(17, _c12, ctx.allRowsExpanded));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.commonService.getMomentFromatedDate(ctx.FromDateLabel), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.commonService.getMomentFromatedDate(ctx.ToDateLabel), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("dataSource", ctx.dataSource)("matSortActive", ctx.sortState.active)("matSortDirection", ctx.sortState.direction);
        \u0275\u0275advance(33);
        \u0275\u0275property("matHeaderRowDef", ctx.columnsToDisplay)("matHeaderRowDefSticky", true);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.columnsToDisplay);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(19, _c22));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.dataSource.data.length === 0);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, NgStyle, RouterLink, MatLegacyButton, MatLegacyAnchor, MatIcon, MatLegacyCard, MatDrawer, MatDrawerContainer, MatLegacyTable, MatLegacyHeaderCellDef, MatLegacyHeaderRowDef, MatLegacyColumnDef, MatLegacyCellDef, MatLegacyRowDef, MatLegacyHeaderCell, MatLegacyCell, MatLegacyHeaderRow, MatLegacyRow, MatSort, MatSortHeader, MatLegacyTooltip, MatLegacyMenu, MatLegacyMenuItem, MatLegacyMenuTrigger, SideFilterComponent], styles: ['\n\n.g-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fd6400;\n  border-color: #fd6400;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n  .mat-tooltip.below {\n  overflow: initial;\n  margin-top: 1rem;\n}\n  .mat-tooltip.below:after {\n  top: -0.5rem;\n  right: calc(50% - 0.5rem);\n  transform: rotate(0);\n}\n.consulta[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  cursor: pointer;\n  margin-right: 5px;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n}\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-card[_ngcontent-%COMP%] {\n  height: 78vh !important;\n}\n.matcard.mat-card[_ngcontent-%COMP%] {\n  height: 100% !important;\n}\n.btn-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, \n.btn-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, \n.show[_ngcontent-%COMP%]    > .btn-secondary.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fd6400;\n  border-color: #fd6400;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  min-width: 124px;\n}\n.btn-group-toggle[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #a1a1a1;\n  border-color: transparent;\n  border-radius: 5px !important;\n  padding: 5px 8px;\n  font-size: 13.5px;\n  font-weight: 400;\n}\n.example-container[_ngcontent-%COMP%] {\n  padding: 12px;\n  overflow: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.select-outer[_ngcontent-%COMP%] {\n  float: right;\n}\n.heading[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 400;\n}\n.color1[_ngcontent-%COMP%] {\n  background: #0eab1c;\n  height: 28px !important;\n  display: inline-block;\n  align-items: flex-end;\n  vertical-align: middle;\n  width: 5px;\n  margin-right: 17px;\n}\n.sort[_ngcontent-%COMP%] {\n  width: 170px;\n  float: right;\n  font-family: "GothamNarrowBold", sans-serif;\n  font-weight: bold;\n}\n.sort-text[_ngcontent-%COMP%] {\n  min-width: 70px;\n  font-size: 11px;\n  margin-right: 5px;\n  text-align: right;\n}\n.sort[_ngcontent-%COMP%]   .mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 1px 2px 6px 1px !important;\n  font-size: 12px;\n}\n.sort[_ngcontent-%COMP%]   .mat-raised-button.mat-warn[_ngcontent-%COMP%] {\n  background-color: #fd6400;\n}\n.right-filter[_ngcontent-%COMP%]   .mat-raised-button.mat-warn[_ngcontent-%COMP%] {\n  box-shadow: 0 0 6px 1px rgba(255, 100, 0, 0.29) !important;\n  background-color: #ff6400 !important;\n  min-width: 161px;\n}\n.any-src[_ngcontent-%COMP%] {\n  padding-right: 16px;\n  text-align: left;\n  white-space: nowrap;\n}\n.synch[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-right: 15px;\n  font-family: "GothamNarrowBold", sans-serif !important;\n}\n.all[_ngcontent-%COMP%] {\n  margin-left: 13px;\n  font-weight: bold;\n  font-size: 14px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.head1[_ngcontent-%COMP%] {\n  text-align: left !important;\n  font-size: 17px;\n  color: #000;\n}\n.patient-name[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #0075bc;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.example-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(2), \n.example-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(2) {\n  min-width: 98px !important;\n}\n.example-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(3), \n.example-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(3) {\n  min-width: 80px !important;\n  width: 80px;\n}\n.imgouter[_ngcontent-%COMP%] {\n  width: 42px;\n  text-align: center;\n}\n.norecord[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  border: 1px solid #ccc9;\n  border-top: transparent;\n  background-color: #fbfbfb;\n}\ntd.mat-cell[_ngcontent-%COMP%]:last-of-type, \ntd.mat-footer-cell[_ngcontent-%COMP%]:last-of-type, \nth.mat-header-cell[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 23px;\n}\n.example-container[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, \n.example-container[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  max-width: 150px;\n  width: 45px;\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n  position: relative;\n  top: 0px;\n  box-shadow: none !important;\n}\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n  padding: 12px 0;\n}\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  justify-content: space-around;\n}\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.card-complete[_ngcontent-%COMP%] {\n  border-left: 5px solid #0eab1c;\n}\n.completed[_ngcontent-%COMP%] {\n  border-left: 5px solid #0eab1c;\n}\n.pending[_ngcontent-%COMP%] {\n  border-left: 5px solid #969696;\n}\n.cancelled[_ngcontent-%COMP%] {\n  border-left: 5px solid red;\n}\n.mat-column-expandedDetail[_ngcontent-%COMP%] {\n  background: #f5f7f9;\n}\n.card-head[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: "GothamNarrowBold", sans-serif;\n  font-weight: bold;\n  width: 65%;\n  word-break: break-word;\n  white-space: break-spaces;\n  text-align: left;\n  line-height: 16px;\n}\n.card-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  width: 35%;\n  word-break: break-word;\n  white-space: normal;\n  text-align: right;\n}\n.card-block[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  margin-bottom: 13px;\n  padding: 12px;\n  height: 100%;\n  border-radius: 5px !important;\n  padding-bottom: 0;\n}\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   img[_ngcontent-%COMP%] {\n}\n.example-element-row.example-expanded-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   img[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: rotate(0deg);\n}\n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%]:nth-of-type(1), \n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%]:nth-of-type(2), \n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%]:nth-of-type(3) {\n  margin-bottom: 10px;\n}\n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.card-arrow[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #0072ce !important;\n}\n.dashboard-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-radius: 5px 0 0 0px !important;\n}\n.dashboard-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-radius: 0px 5px 0 0px !important;\n}\n.cdk-column-expandedDetail[_ngcontent-%COMP%] {\n  padding-right: 0 !important;\n}\n.dashboard-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, \ntr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 14px !important;\n}\n.dashboard-table[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.dashboard-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:nth-child(4n+1) {\n  background-color: #fbfbfb !important;\n}\n.noresult[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(1) {\n  font-family: "GothamNarrowBold", sans-serif;\n  font-size: 15px;\n  margin-top: 20px;\n}\n.noresult[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(2) {\n  font-size: 15px;\n  margin-top: 20px;\n  color: #3e3e3e;\n}\n.noresult[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #3e3e3e;\n}\n.noresult[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 18px;\n}\n.closeall[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(0deg);\n  transition: all 0.1s;\n}\n.closeall.expandedall[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(-180deg);\n}\n.closeall[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 999;\n  top: 50px;\n  right: 45px;\n  background: transparent;\n  min-width: 34px;\n  padding: 0;\n}\n.cust-postion[_ngcontent-%COMP%] {\n  position: relative;\n}\n.example-container1[_ngcontent-%COMP%] {\n  height: calc(100vh - 20px);\n  position: relative;\n  z-index: 0;\n}\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.dashboard-wrapper[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n}\n.ipadfiler[_ngcontent-%COMP%] {\n  display: none;\n}\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.dvn_name[_ngcontent-%COMP%] {\n  width: auto !important;\n}\n@media (max-width: 800px) {\n  .dashboard-wrapper[_ngcontent-%COMP%] {\n    padding-left: 12px !important;\n    padding-right: 12px !important;\n  }\n  .btn-secondary[_ngcontent-%COMP%] {\n    min-width: 106px;\n  }\n  .toprow[_ngcontent-%COMP%] {\n    flex-direction: row;\n    padding-right: 0 !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .example-sidenav[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .mat-card[_ngcontent-%COMP%] {\n    border-radius: 10px !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 48px;\n    padding: 0;\n    margin-left: 10px;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {\n  .dashboard-wrapper[_ngcontent-%COMP%] {\n    padding-left: 12px !important;\n    padding-right: 12px !important;\n  }\n  .btn-secondary[_ngcontent-%COMP%] {\n    min-width: 106px;\n  }\n  .toprow[_ngcontent-%COMP%] {\n    flex-direction: row;\n    padding-right: 0 !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .example-sidenav[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .mat-card[_ngcontent-%COMP%] {\n    border-radius: 10px !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 48px;\n    padding: 0;\n    margin-left: 10px;\n  }\n}\n.filter-txt[_ngcontent-%COMP%] {\n  position: relative;\n  height: 22px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.cros-btn[_ngcontent-%COMP%] {\n  position: relative;\n  right: 0;\n  top: 0;\n  height: 30px !important;\n  width: 30px;\n  margin-left: 6px;\n}\n.g-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fd6400;\n  border-color: #fd6400;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n}\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87);\n  margin-right: 10px;\n  margin-left: 10px;\n  box-shadow: 0 0 12px 0 rgb(0 0 0 / 19%) !important;\n  border-radius: 6px !important;\n  margin-bottom: 11px;\n}\n.mat-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.btn-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, \n.btn-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, \n.show[_ngcontent-%COMP%]    > .btn-secondary.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fd6400;\n  border-color: #fd6400;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  min-width: 124px;\n}\n.btn-group-toggle[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #a1a1a1;\n  border-color: transparent;\n  border-radius: 5px !important;\n  padding: 5px 8px;\n  font-size: 13.5px;\n  font-weight: 400;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.select-outer[_ngcontent-%COMP%] {\n  float: right;\n}\n.heading[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 400;\n}\n.color1[_ngcontent-%COMP%] {\n  background: #0eab1c;\n  height: 28px !important;\n  display: inline-block;\n  align-items: flex-end;\n  vertical-align: middle;\n  width: 5px;\n  margin-right: 17px;\n}\n.sort[_ngcontent-%COMP%] {\n  width: 170px;\n  float: right;\n  font-family: "GothamNarrowBold", sans-serif;\n  font-weight: bold;\n}\n.sort-text[_ngcontent-%COMP%] {\n  min-width: 70px;\n  font-size: 11px;\n  margin-right: 5px;\n  text-align: right;\n}\n.sort[_ngcontent-%COMP%]   .mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 1px 2px 6px 1px !important;\n  font-size: 12px;\n}\n.sort[_ngcontent-%COMP%]   .mat-raised-button.mat-warn[_ngcontent-%COMP%] {\n  background-color: #fd6400;\n}\n.right-filter[_ngcontent-%COMP%]   .mat-raised-button.mat-warn[_ngcontent-%COMP%] {\n  box-shadow: 0 0 6px 1px rgba(255, 100, 0, 0.29) !important;\n  background-color: #ff6400 !important;\n  min-width: 161px;\n}\n.any-src[_ngcontent-%COMP%] {\n  padding-right: 16px;\n  text-align: left;\n  white-space: nowrap;\n}\n.synch[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-right: 15px;\n  font-family: "GothamNarrowBold", sans-serif !important;\n}\n.all[_ngcontent-%COMP%] {\n  margin-left: 13px;\n  font-weight: bold;\n  font-size: 14px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.head1[_ngcontent-%COMP%] {\n  text-align: left !important;\n  font-size: 17px;\n  color: #000;\n}\n.patient-name[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #0075bc;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.example-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(2), \n.example-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(2) {\n  min-width: 98px !important;\n}\n.imgouter[_ngcontent-%COMP%] {\n  width: 42px;\n  text-align: center;\n}\n.norecord[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  border: 1px solid #ccc9;\n  border-top: transparent;\n  background-color: #fbfbfb;\n}\ntd.mat-cell[_ngcontent-%COMP%]:last-of-type, \ntd.mat-footer-cell[_ngcontent-%COMP%]:last-of-type, \nth.mat-header-cell[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 23px;\n}\n.example-container[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, \n.example-container[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  max-width: 150px;\n  width: 45px;\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n}\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.card-complete[_ngcontent-%COMP%] {\n  border-left: 5px solid #0eab1c;\n}\n.completed[_ngcontent-%COMP%] {\n  border-left: 5px solid #0eab1c;\n}\n.pending[_ngcontent-%COMP%] {\n  border-left: 5px solid #969696;\n}\n.cancelled[_ngcontent-%COMP%] {\n  border-left: 5px solid red;\n}\n.mat-column-expandedDetail[_ngcontent-%COMP%] {\n  background: #f5f7f9;\n}\n.card-head[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: "GothamNarrowBold", sans-serif;\n  font-weight: bold;\n  width: 65%;\n  word-break: break-word;\n  white-space: break-spaces;\n  text-align: left;\n  line-height: 16px;\n}\n.card-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  width: 35%;\n  word-break: break-word;\n  white-space: normal;\n  text-align: right;\n}\n.card-block[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  margin-bottom: 13px;\n  padding: 12px;\n  height: 100%;\n  border-radius: 5px !important;\n  padding-bottom: 0;\n}\n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%]:nth-of-type(1), \n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%]:nth-of-type(2), \n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%]:nth-of-type(3) {\n  margin-bottom: 10px;\n}\n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.card-arrow[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #0072ce !important;\n}\n.dashboard-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-radius: 5px 0 0 0px !important;\n}\n.dashboard-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-radius: 0px 5px 0 0px !important;\n}\n.cdk-column-expandedDetail[_ngcontent-%COMP%] {\n  padding-right: 0 !important;\n}\n.dashboard-table[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.dashboard-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:nth-child(4n+1) {\n  background-color: #fbfbfb !important;\n}\n.noresult[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(1) {\n  font-family: "GothamNarrowBold", sans-serif;\n  font-size: 15px;\n  margin-top: 20px;\n}\n.noresult[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(2) {\n  font-size: 15px;\n  margin-top: 20px;\n  color: #3e3e3e;\n}\n.noresult[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #3e3e3e;\n}\n.noresult[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 18px;\n}\n.closeall[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(0deg);\n  transition: all 0.1s;\n}\n.closeall.expandedall[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(-180deg);\n}\n.closeall[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 999;\n  top: 47px;\n  right: 35px;\n  background: transparent;\n  min-width: 34px;\n  padding: 0;\n}\n.cust-postion[_ngcontent-%COMP%] {\n  position: relative;\n}\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.dashboard-wrapper[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n}\n.ipadfiler[_ngcontent-%COMP%] {\n  display: none;\n}\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.dvn_name[_ngcontent-%COMP%] {\n  width: auto !important;\n}\n@media (max-width: 800px) {\n  .dashboard-wrapper[_ngcontent-%COMP%] {\n    padding-left: 12px !important;\n    padding-right: 12px !important;\n  }\n  .btn-secondary[_ngcontent-%COMP%] {\n    min-width: 106px;\n  }\n  .toprow[_ngcontent-%COMP%] {\n    flex-direction: row;\n    padding-right: 0 !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .example-sidenav[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .mat-card[_ngcontent-%COMP%] {\n    border-radius: 10px !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 48px;\n    padding: 0;\n    margin-left: 10px;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {\n  .dashboard-wrapper[_ngcontent-%COMP%] {\n    padding-left: 12px !important;\n    padding-right: 12px !important;\n  }\n  .btn-secondary[_ngcontent-%COMP%] {\n    min-width: 106px;\n  }\n  .toprow[_ngcontent-%COMP%] {\n    flex-direction: row;\n    padding-right: 0 !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .example-sidenav[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .mat-card[_ngcontent-%COMP%] {\n    border-radius: 10px !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 48px;\n    padding: 0;\n    margin-left: 10px;\n  }\n}\n.filter-txt[_ngcontent-%COMP%] {\n  position: relative;\n  height: 22px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.cros-btn[_ngcontent-%COMP%] {\n  position: relative;\n  right: 0;\n  top: 0;\n  height: 30px !important;\n  width: 30px;\n  margin-left: 6px;\n}\n.example-action-buttons[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], \n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.heading_bar[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #ed8b00;\n  color: #fff;\n  padding: 8px 10px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.heading_bar[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  width: 60px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  min-width: 120px;\n  padding-right: 25px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 250px;\n  padding: 0 15px 0 0;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  width: 140px;\n  padding-right: 22px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n  width: 115px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n  width: 70px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\n  width: 105px;\n  word-break: break-word;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(7) {\n  width: 100px;\n  word-break: break-word;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(8) {\n  width: 135px;\n  word-break: break-word;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\ntd[_ngcontent-%COMP%] {\n  font-family: "gothambook", sans-serif;\n  vertical-align: top;\n}\nth[_ngcontent-%COMP%] {\n  font-family: "GothamNarrowBold", sans-serif !important;\n  font-weight: 100;\n}\n.heading_bar[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.dot-sst[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  border: 4px solid #d91c00;\n}\n.dot-rtt[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #d91c00;\n}\n.dot-urine[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #fed504;\n}\n.dot-btt[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #a0dcee;\n}\n.dot-ltt[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #a884bb;\n}\n.dot-grntt[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #31b44a;\n}\n.dot-feces[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #a36510;\n}\n.dot[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n}\n.dred[_ngcontent-%COMP%] {\n  background: red;\n}\n.dgreen[_ngcontent-%COMP%] {\n  background: green;\n}\n.dred_circle[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid red;\n}\n.mat-accordion[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 216px);\n  overflow: auto;\n}\n.tooltip[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  font-size: 13px;\n  opacity: 1;\n}\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 370px;\n  background-color: #fff;\n  color: #000;\n  text-align: center;\n  border-radius: 6px;\n  padding: 0;\n  position: absolute;\n  z-index: 1;\n  top: -5px;\n  right: 110%;\n  box-shadow: 0 0 12px 0 rgb(0 0 0 / 19%) !important;\n}\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.tool_header[_ngcontent-%COMP%] {\n  background: #0072ce;\n  padding: 16px 0;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  color: #fff;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.tool_text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.abbre[_ngcontent-%COMP%] {\n  width: 92px;\n  display: inline-block;\n  text-align: left;\n  padding-left: 3px;\n}\n.filter-head[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-family: "GothamNarrowBold", sans-serif;\n  color: #585858;\n  margin-bottom: 12px;\n}\n.clrall[_ngcontent-%COMP%] {\n  color: #0072ce !important;\n  font-family: "GothamNarrowBold", sans-serif;\n  cursor: pointer;\n  font-weight: bold;\n}\n.do_srch[_ngcontent-%COMP%] {\n  background: url("./media/search-icon.png");\n  background-repeat: no-repeat;\n  background-size: 15px;\n  padding-left: 24px;\n}\n.do_filter_wrapper[_ngcontent-%COMP%] {\n  height: calc(100vh - 119px);\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n}\n.del_doc[_ngcontent-%COMP%] {\n  font-family: "gothambook", sans-serif;\n}\n.sst[_ngcontent-%COMP%] {\n  border: 4px solid #d91c00;\n}\n.rrt[_ngcontent-%COMP%] {\n  background: #d91c00;\n}\n.ltt[_ngcontent-%COMP%] {\n  background: #a884bb;\n}\n.btt[_ngcontent-%COMP%] {\n  background: #a0dcee;\n}\n.grntt[_ngcontent-%COMP%] {\n  background: #31b44a;\n}\n.f[_ngcontent-%COMP%] {\n  background: #a36510;\n}\n.u[_ngcontent-%COMP%] {\n  background: #fed504;\n}\n.micro[_ngcontent-%COMP%] {\n  min-height: 16px;\n  min-width: 16px;\n  margin-right: 5px;\n}\n.msst[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 4px solid #ff0000;\n}\n.mrtt[_ngcontent-%COMP%] {\n  background: #d91c00;\n}\n.mltt[_ngcontent-%COMP%] {\n  background: #a884bb;\n}\n.mgrntt[_ngcontent-%COMP%] {\n  background: #31b44a;\n}\n.tooltext[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100px;\n  right: 27px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n}\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.tat_text[_ngcontent-%COMP%] {\n  width: 100px;\n  word-wrap: break-word;\n  white-space: normal;\n  display: block;\n  line-height: 15px;\n}\n.desc_text[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  white-space: normal;\n  display: block;\n  line-height: 15px;\n  min-height: 30px;\n}\n.usermangemt[_ngcontent-%COMP%] {\n  padding: 0 12px;\n  padding-left: 5px;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.select-outer[_ngcontent-%COMP%] {\n  float: right;\n}\n.heading[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  font-family: "GothamNarrowBold", sans-serif;\n  font-weight: bold;\n}\n.color1[_ngcontent-%COMP%] {\n  background: red;\n  height: 34px !important;\n  display: inline-block;\n  align-items: flex-end;\n  vertical-align: middle;\n}\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n.links[_ngcontent-%COMP%] {\n  color: #0075bc;\n  cursor: pointer !important;\n  text-decoration: underline;\n}\n.adduser-btn[_ngcontent-%COMP%] {\n  background-color: #ff6400 !important;\n  color: #fff !important;\n  height: 34px !important;\n  padding: 0px 30px !important;\n  border-radius: 6px !important;\n  line-height: 34px;\n}\n.view-user[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  flex: auto;\n  min-width: 0;\n  width: 115px;\n}\n.view-user[_ngcontent-%COMP%]   .mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 4px 6px 7px 4px;\n  margin: 0 !important;\n  top: -2px;\n  font-size: 14px;\n}\n.view-user[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%] {\n  color: #585858;\n}\n.view-user[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  padding: 0;\n  border-radius: 10px 10px 0 0;\n}\n.edit-profile[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  background-color: #9e9e9e;\n  min-width: 125px;\n}\n.save-change[_ngcontent-%COMP%] {\n  background-color: #ff6400;\n  color: #fff;\n  min-width: 125px;\n}\n.editicon[_ngcontent-%COMP%]   .mat-icon-button.mat-accent[_ngcontent-%COMP%] {\n  color: #1072ce !important;\n}\n.deleteicon[_ngcontent-%COMP%]   .mat-icon-button.mat-accent[_ngcontent-%COMP%] {\n  color: #1072ce !important;\n  margin-right: 10px;\n}\n.iconprt[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%] {\n  width: 85px;\n  border: 2px solid #fd6400;\n  color: #fd6400;\n  height: 25px !important;\n  text-align: left;\n  padding-left: 5px;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, \n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  min-width: 100px;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(5), \n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(5) {\n  width: 145px;\n  text-align: left;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(7), \n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(7) {\n  width: 150px;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(7), \n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(8) {\n  padding-right: 13px;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(2), \n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(2) {\n  width: 100px;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: center;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 30px !important;\n}\n.delbtn[_ngcontent-%COMP%] {\n  background: #1072ce !important;\n}\n.norecord[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  border: 1px solid #ccc9;\n  background-color: #fbfbfb;\n}\n.custom-error[_ngcontent-%COMP%] {\n  color: red;\n  display: block;\n  font-size: 11px;\n  position: absolute;\n  left: 26px;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 1em;\n}\ntable.mat-table[_ngcontent-%COMP%] {\n  border-collapse: separate !important;\n  border-spacing: 0 6px !important;\n  position: relative;\n  top: -12px;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  width: 180px;\n  min-width: 180px;\n  padding-right: 23px;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 150px;\n  min-width: 150px !important;\n  padding-right: 22px;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 10px !important;\n  border-bottom-right-radius: 10px !important;\n  position: relative;\n  padding-right: 15px;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.19) !important;\n}\n.usermangemt[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-radius: 5px 0 0 0px !important;\n}\n.usermangemt[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-radius: 0px 5px 0 0px !important;\n}\n.name_outer[_ngcontent-%COMP%] {\n  line-height: 16px;\n}\n[hidden][_ngcontent-%COMP%] {\n  display: none !important;\n}\n.msg[_ngcontent-%COMP%] {\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.dosskyBlue[_ngcontent-%COMP%] {\n  border-left: 5px solid #2d68c4;\n}\n.dosGreen[_ngcontent-%COMP%] {\n  border-left: 5px solid #31b44a;\n}\n.dosorange[_ngcontent-%COMP%] {\n  border-left: 5px solid #fed504;\n}\n.dosequine[_ngcontent-%COMP%] {\n  border-left: 5px solid #006271;\n}\n.dosBlue[_ngcontent-%COMP%] {\n  border-left: 5px solid #a0dcee;\n}\n.dosallother[_ngcontent-%COMP%] {\n  border-left: 5px solid #a884bb;\n}\n.dotdosskyBlue[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #2d68c4;\n}\n.dotdosGreen[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #31b44a;\n}\n.dotdosorange[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #fed504;\n}\n.dotdosequine[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #006271;\n}\n.dotdosBlue[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #a0dcee;\n}\n.dotdosallother[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #a884bb;\n}\n.star_wrapper[_ngcontent-%COMP%] {\n  width: 40px;\n}\n.comp_text[_ngcontent-%COMP%] {\n  word-break: break-word;\n  white-space: break-spaces;\n}\n#inner_table[_ngcontent-%COMP%] {\n  border-right: 17px solid transparent;\n  border-collapse: inherit !important;\n  border-spacing: inherit !important;\n  border-bottom-left-radius: 10px !important;\n}\n#inner_table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n  box-shadow: none !important;\n}\n.noresult[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 85px;\n  width: 98.5%;\n}\n.tool_text[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n  height: 25px;\n}\n.bluetext[_ngcontent-%COMP%] {\n  color: #000 !important;\n  padding-right: 24px;\n  word-break: break-word;\n  white-space: normal;\n}\n.left-block[_ngcontent-%COMP%] {\n  width: calc(100vw - 373px) !important;\n}\ntable[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.create-btn[_ngcontent-%COMP%] {\n  background-color: #fd6400;\n  min-width: 124px;\n  font-weight: 400;\n  box-shadow: 0 0 6px 1px rgb(255 100 0 / 29%);\n  font-family: "gothambook", sans-serif !important;\n  font-size: 15px;\n}\n.ref[_ngcontent-%COMP%], \n.doc[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.completed[_ngcontent-%COMP%] {\n  border-left: 5px solid #0eab1c;\n}\n.completedOne[_ngcontent-%COMP%] {\n  border-left: 5px solid #0eab1c;\n}\n.completedtwo[_ngcontent-%COMP%] {\n  border-left: 5px solid #0eab1c;\n}\n.pending[_ngcontent-%COMP%] {\n  border-left: 5px solid #969696;\n}\n.cancelled[_ngcontent-%COMP%] {\n  border-left: 5px solid red;\n}\n.received[_ngcontent-%COMP%] {\n  border-left: 5px solid #808080;\n}\n.receivedOne[_ngcontent-%COMP%] {\n  border-left: 5px solid #808080;\n}\n.receivedTwo[_ngcontent-%COMP%] {\n  border-left: 5px solid #808080;\n}\n.complected[_ngcontent-%COMP%] {\n  color: #067cd3 !important;\n  font-weight: bold !important;\n  cursor: pointer;\n}\n.arrived[_ngcontent-%COMP%] {\n  color: #067cd3 !important;\n  font-weight: bold !important;\n  cursor: pointer;\n}\n.ammended[_ngcontent-%COMP%] {\n  color: #067cd3 !important;\n  font-weight: bold !important;\n  cursor: pointer;\n}\n.colorB[_ngcontent-%COMP%] {\n  color: #067cd3;\n}\n.black[_ngcontent-%COMP%] {\n  border: black;\n}\n@media screen and (min-width: 1025px) and (max-width: 1366px) {\n  .usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    min-width: 145px;\n    padding-right: 12px;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n    width: 85px;\n    padding-right: 22px;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n    width: 180px;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n    width: 70px;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\n    width: 145px;\n    word-break: break-all;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(7) {\n    width: 100px;\n    word-break: break-all;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(8) {\n    width: 100px;\n    word-break: break-all;\n  }\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n  padding-right: 10px;\n}\n.elipsis[_ngcontent-%COMP%] {\n  float: left;\n  max-width: 80%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: help;\n}\n.addIcon[_ngcontent-%COMP%] {\n  width: 66px;\n  display: flex;\n  align-items: center;\n}\n.tableRow[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\n  padding-right: 25px;\n}\n.example-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(2) {\n  min-width: 100px !important;\n}\n.orderTitle[_ngcontent-%COMP%], \n.filterMob[_ngcontent-%COMP%] {\n  display: none;\n}\n.orderTable[_ngcontent-%COMP%] {\n  height: calc(100vh - 275px);\n  overflow: auto;\n}\n.left-block[_ngcontent-%COMP%] {\n  width: calc(97vw - 445px) !important;\n  right: 298px;\n  position: inherit;\n}\n.right-filter[_ngcontent-%COMP%] {\n  right: 42px;\n}\n@media screen and (max-width: 767px) {\n  .orderTitle[_ngcontent-%COMP%], \n   .filterMob[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .ipadfiler[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n  .filtericon[_ngcontent-%COMP%] {\n    padding-right: 5px;\n  }\n  .qicon[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .qpart.qicon[_ngcontent-%COMP%] {\n    display: initial;\n  }\n  .right-filter[_ngcontent-%COMP%] {\n    right: 0;\n  }\n  .left-block[_ngcontent-%COMP%] {\n    width: inherit !important;\n    right: 0 !important;\n  }\n  .norecord[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(1):before {\n    display: none;\n  }\n  .norecord[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: none;\n  }\n  .title-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .noresult[_ngcontent-%COMP%] {\n    position: inherit;\n    top: inherit;\n    width: inherit;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .toprow[_ngcontent-%COMP%] {\n    background-color: transparent;\n    padding-top: 0 !important;\n  }\n  .orderBtn[_ngcontent-%COMP%] {\n    padding-top: 15px;\n  }\n  .orderTitle[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 23%;\n    font-size: 17px;\n    font-weight: 600;\n  }\n  i.filtertxt[_ngcontent-%COMP%] {\n    color: #ed8b00 !important;\n    font-style: normal;\n    font-size: 16px;\n    margin-left: 5px;\n  }\n  .toprow.mobhead[_ngcontent-%COMP%] {\n    padding: 0.5rem !important;\n    border-top: 2px solid #ccc;\n    border-bottom: 2px solid #ccc;\n    box-shadow: 0 0 12px 0 rgb(0 0 0 / 19%) !important;\n    background: #fff;\n  }\n  .mcontent[_ngcontent-%COMP%] {\n    margin: 20px 20px 0 20px;\n    background: transparent;\n    box-shadow: none !important;\n  }\n  .create-btn[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n  .example-sidenav[_ngcontent-%COMP%] {\n    top: 0;\n  }\n  table[_ngcontent-%COMP%], \n   thead[_ngcontent-%COMP%], \n   tbody[_ngcontent-%COMP%], \n   th[_ngcontent-%COMP%], \n   td[_ngcontent-%COMP%], \n   tr[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  tr[_ngcontent-%COMP%] {\n    border: none;\n  }\n  td[_ngcontent-%COMP%] {\n    border: none;\n    border-bottom: 1px solid #eee;\n    position: relative;\n    padding-left: 50%;\n  }\n  td[_ngcontent-%COMP%]:nth-of-type(1):before {\n    content: "Created";\n  }\n  td[_ngcontent-%COMP%]:nth-of-type(2):before {\n    content: "Last Update";\n  }\n  td[_ngcontent-%COMP%]:nth-of-type(3):before {\n    content: "Order ID";\n  }\n  td[_ngcontent-%COMP%]:nth-of-type(4):before {\n    content: "Accession ID";\n  }\n  td[_ngcontent-%COMP%]:nth-of-type(5):before {\n    content: "Doctor Name";\n  }\n  td[_ngcontent-%COMP%]:nth-of-type(6):before {\n    content: "Patient ID";\n  }\n  td[_ngcontent-%COMP%]:nth-of-type(7):before {\n    content: "Patient Name";\n  }\n  td[_ngcontent-%COMP%]:nth-of-type(8):before {\n    content: "Owner Name";\n  }\n  td[_ngcontent-%COMP%]:nth-of-type(9):before {\n    content: "Species";\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {\n    position: absolute;\n    left: 15px;\n    font-weight: bold;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    height: 100%;\n    margin-bottom: 25px;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border: none;\n    margin-bottom: 15px;\n    border-radius: 10px;\n    width: 100%;\n    box-shadow: none !important;\n    background: #fff;\n    display: grid;\n  }\n  .example-sidenav-content[_ngcontent-%COMP%] {\n    background: #ececef;\n  }\n  .mat-table[_ngcontent-%COMP%] {\n    background: transparent;\n  }\n  tr.mat-header-row[_ngcontent-%COMP%] {\n    height: 0 !important;\n    display: none;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    display: none;\n  }\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    width: 100% !important;\n    padding-left: 40% !important;\n    text-align: left !important;\n    height: 40px;\n    line-height: 12px;\n    padding-top: 15px;\n    padding-right: 15px;\n    border: none;\n  }\n  .closeall[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .iconprt[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -38px;\n    right: 15px;\n  }\n  .usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    height: 0;\n    padding: 0;\n  }\n  .usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n    border-top-right-radius: 10px !important;\n    border: none !important;\n  }\n  .usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    height: 0;\n    padding: 0;\n  }\n  .usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n    padding-top: 15px;\n  }\n  .example-container[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    max-width: inherit;\n    width: inherit;\n    height: 100%;\n  }\n  .example-element-detail[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n    border: 1px solid #dee2e6;\n    margin-right: 16px;\n  }\n  td.mat-cell.cdk-column-expandedDetail.mat-column-expandedDetail.ng-tns-c20-1.ng-star-inserted[_ngcontent-%COMP%]:before {\n    display: none;\n  }\n  table[_ngcontent-%COMP%]   tr.example-detail-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    height: 100% !important;\n    padding-left: 0% !important;\n    background: #fff !important;\n    z-index: 9999;\n    display: inline-table;\n  }\n  tr.example-detail-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before {\n    display: none;\n  }\n  .mat-column-SpeciesName[_ngcontent-%COMP%] {\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n  }\n  table.mat-table[_ngcontent-%COMP%] {\n    border-spacing: 0 !important;\n  }\n  tr.example-detail-row[_ngcontent-%COMP%] {\n    position: relative;\n    top: -22px;\n    z-index: 0;\n    border-top-left-radius: 0 !important;\n    border-top-right-radius: 0 !important;\n  }\n  .card-block[_ngcontent-%COMP%]   .col-sm-4.ng-tns-c20-1.ng-star-inserted[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .left-block[_ngcontent-%COMP%] {\n    width: inherit !important;\n  }\n  .cbtn[_ngcontent-%COMP%], \n   .orderBtn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 500px) and (max-width: 600px) {\n  .card-block[_ngcontent-%COMP%]   .col-sm-4.ng-tns-c20-1.ng-star-inserted[_ngcontent-%COMP%] {\n    max-width: 50%;\n  }\n  .card-head[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n@media screen and (min-width: 768px) and (max-width: 800px) {\n  .left-block[_ngcontent-%COMP%] {\n    width: inherit !important;\n    right: 0;\n  }\n  .toprow[_ngcontent-%COMP%] {\n    flex-direction: row;\n    padding-right: 10px !important;\n  }\n  i.filtertxt[_ngcontent-%COMP%] {\n    color: #ed8b00 !important;\n    font-style: normal;\n    font-size: 16px;\n    margin-left: 5px;\n  }\n  .example-sidenav[_ngcontent-%COMP%] {\n    top: 56px;\n  }\n  .usermangemt[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .closeall[_ngcontent-%COMP%] {\n    top: 4px;\n    right: -55px;\n  }\n}\n@media screen and (min-width: 768px) and (max-width: 1024px) {\n  .qpart.qicon[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .ipadfiler[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    text-align: right;\n  }\n}\n@media screen and (min-width: 800px) and (max-width: 1024px) {\n  .left-block[_ngcontent-%COMP%] {\n    width: inherit !important;\n    right: 0 !important;\n  }\n  i.filtertxt[_ngcontent-%COMP%] {\n    color: #ed8b00 !important;\n    font-style: normal;\n    font-size: 16px;\n    margin-left: 5px;\n  }\n  .example-sidenav[_ngcontent-%COMP%] {\n    top: 56px;\n  }\n  .usermangemt[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .ipadfiler[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .closeall[_ngcontent-%COMP%] {\n    top: 4px;\n    right: -25px;\n  }\n}\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {\n  .ipadfiler[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .closeall[_ngcontent-%COMP%] {\n    top: 4px;\n    right: 56px;\n  }\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(9) {\n  padding-right: 12px !important;\n}\n.left-block[_ngcontent-%COMP%] {\n  height: 82% !important;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(9) {\n  width: 70px;\n  word-break: break-all;\n}\n@media only screen and (min-device-width: 810px) and (max-device-width: 1080px) and (orientation: landscape) {\n  .usermangemt[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .closeall[_ngcontent-%COMP%] {\n    top: 4px;\n    right: -115px;\n  }\n  .ipadfiler[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media only screen and (min-device-width: 1081px) and (max-device-width: 1180px) {\n  .closeall[_ngcontent-%COMP%] {\n    top: 4px;\n    right: -20px;\n  }\n  .usermangemt[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n  .order-action {\n  max-width: inherit !important;\n  min-width: inherit !important;\n}\n.example-container.usermangemt[_ngcontent-%COMP%] {\n  height: inherit;\n}\n.will-call[_ngcontent-%COMP%] {\n  margin: 0px 0px 0px 12px;\n}\n/*# sourceMappingURL=orders.component.css.map */'], data: { animation: [
      trigger("detailExpand", [
        state("collapsed", style({ height: "0px", minHeight: "0" })),
        state("expanded", style({ height: "*" })),
        transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))
      ])
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrdersComponent, { className: "OrdersComponent", filePath: "src\\app\\modules\\refrence-lab\\orders\\orders.component.ts", lineNumber: 36 });
})();

// src/app/modules/refrence-lab/orders/panel-test-list-modal/panel-test-list-modal.component.ts
var _c03 = ["orderTestsForm"];
var _c13 = (a0) => ({ "checkmark": a0 });
var _c23 = (a0, a1, a2, a3, a4, a5) => ({ dotdosskyBlue: a0, dotdosGreen: a1, dotdosorange: a2, dotdosequine: a3, dotdosBlue: a4, dotdosallother: a5 });
var _c33 = (a0) => ({ "color": a0 });
var _c43 = (a0) => ({ "display": a0 });
function PanelTestListModalComponent_div_3_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function PanelTestListModalComponent_div_3_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearSearchField());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function PanelTestListModalComponent_div_3_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const filter_r5 = ctx.$implicit;
    \u0275\u0275property("value", filter_r5.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", filter_r5.Name, " ");
  }
}
function PanelTestListModalComponent_div_3_div_34_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275propertyInterpolate1("matTooltip", "Price: ", order_r7.Price, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", order_r7.TestName, " ", order_r7.OrderCode, " ");
  }
}
function PanelTestListModalComponent_div_3_div_34_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", order_r7.TestName, " ", order_r7.OrderCode, " ");
  }
}
function PanelTestListModalComponent_div_3_div_34_div_7_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ord_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ord_r8.code, " ", ord_r8.description, "");
  }
}
function PanelTestListModalComponent_div_3_div_34_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "p", 52)(2, "strong", 53);
    \u0275\u0275text(3, "Sample Requirements:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 52)(8, "strong");
    \u0275\u0275text(9, "Tube Type:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "br");
    \u0275\u0275template(11, PanelTestListModalComponent_div_3_div_34_div_7_span_11_Template, 2, 2, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 52)(13, "strong");
    \u0275\u0275text(14, "TAT:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "br");
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p", 52)(19, "strong");
    \u0275\u0275text(20, "Note:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "br");
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(order_r7.SampleRequirements);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", order_r7.TubeType);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(order_r7.TAT);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(order_r7.Notes);
  }
}
function PanelTestListModalComponent_div_3_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function PanelTestListModalComponent_div_3_div_34_Template_div_click_0_listener() {
      const order_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSelect(order_r7));
    });
    \u0275\u0275elementStart(1, "div", 43)(2, "mat-checkbox", 44);
    \u0275\u0275listener("change", function PanelTestListModalComponent_div_3_div_34_Template_mat_checkbox_change_2_listener($event) {
      const order_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateFilterArray($event, order_r7));
    });
    \u0275\u0275twoWayListener("ngModelChange", function PanelTestListModalComponent_div_3_div_34_Template_mat_checkbox_ngModelChange_2_listener($event) {
      const order_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(order_r7.isChecked, $event) || (order_r7.isChecked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(3, "span", 45);
    \u0275\u0275elementStart(4, "span", 46);
    \u0275\u0275template(5, PanelTestListModalComponent_div_3_div_34_span_5_Template, 2, 4, "span", 47)(6, PanelTestListModalComponent_div_3_div_34_span_6_Template, 2, 2, "span", 48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, PanelTestListModalComponent_div_3_div_34_div_7_Template, 24, 4, "div", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", order_r7.isChecked);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction6(5, _c23, order_r7.Menu === "Blue", order_r7.Menu === "Green", order_r7.Menu === "Orange", order_r7.Menu === "Equine", order_r7.Menu === "AvianExotic", order_r7.Menu === "AllOther"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isViewDOSPrice);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isViewDOSPrice);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r7.isChecked);
  }
}
function PanelTestListModalComponent_div_3_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Norecordsfound, " ");
  }
}
function PanelTestListModalComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "mat-form-field", 13)(4, "mat-select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function PanelTestListModalComponent_div_3_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.SearchTestName, $event) || (ctx_r2.SearchTestName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "mat-option", 15);
    \u0275\u0275text(6, "Search by Test Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-option", 16);
    \u0275\u0275text(8, "Search all Fields ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 17)(10, "mat-form-field", 18)(11, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function PanelTestListModalComponent_div_3_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchText, $event) || (ctx_r2.searchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function PanelTestListModalComponent_div_3_Template_input_keydown_enter_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.getorderTest());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 20);
    \u0275\u0275element(13, "img", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, PanelTestListModalComponent_div_3_button_14_Template, 3, 0, "button", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 23)(16, "div", 24)(17, "mat-form-field", 25)(18, "mat-select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function PanelTestListModalComponent_div_3_Template_mat_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.SelectedClass, $event) || (ctx_r2.SelectedClass = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(19, PanelTestListModalComponent_div_3_mat_option_19_Template, 2, 2, "mat-option", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 28)(21, "mat-checkbox", 29);
    \u0275\u0275twoWayListener("ngModelChange", function PanelTestListModalComponent_div_3_Template_mat_checkbox_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.SelectedFav, $event) || (ctx_r2.SelectedFav = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PanelTestListModalComponent_div_3_Template_mat_checkbox_ngModelChange_21_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.getorderTest());
    });
    \u0275\u0275text(22, " Favorites ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 30)(24, "div", 31)(25, "a", 32);
    \u0275\u0275listener("click", function PanelTestListModalComponent_div_3_Template_a_click_25_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearAll());
    });
    \u0275\u0275text(26, "Clear All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 33);
    \u0275\u0275listener("click", function PanelTestListModalComponent_div_3_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.getorderTest(true));
    });
    \u0275\u0275text(28, " Search ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 34)(30, "a", 35);
    \u0275\u0275listener("click", function PanelTestListModalComponent_div_3_Template_a_click_30_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.commonService.onlineHelp(1044));
    });
    \u0275\u0275text(31, " ZRL Policies ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 36)(33, "div", 37);
    \u0275\u0275template(34, PanelTestListModalComponent_div_3_div_34_Template, 8, 12, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, PanelTestListModalComponent_div_3_div_35_Template, 2, 1, "div", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.SearchTestName);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c13, ctx_r2.SearchTestName === "Search by Test Name"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c13, ctx_r2.SearchTestName === "Search all fields"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchText);
    \u0275\u0275property("placeholder", ctx_r2.label.Search);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.searchText);
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", ctx_r2.label.FilterByClass);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.SelectedClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filterClassData);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.SelectedFav);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r2.filterDatafor);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.filterDatafor == null ? null : ctx_r2.filterDatafor.length) === 0);
  }
}
function PanelTestListModalComponent_div_6_ng_templae_9_div_1_div_9_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PanelTestListModalComponent_div_6_ng_templae_9_div_1_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "label", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PanelTestListModalComponent_div_6_ng_templae_9_div_1_div_9_div_1_span_3_Template, 2, 0, "span", 72);
    \u0275\u0275elementStart(4, "div", 73)(5, "mat-form-field", 18)(6, "input", 74);
    \u0275\u0275listener("keyup", function PanelTestListModalComponent_div_6_ng_templae_9_div_1_div_9_div_1_Template_input_keyup_6_listener($event) {
      \u0275\u0275restoreView(_r12);
      const item_r13 = \u0275\u0275nextContext().$implicit;
      const testData_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onAnswerChange($event, item_r13, testData_r11));
    });
    \u0275\u0275twoWayListener("ngModelChange", function PanelTestListModalComponent_div_6_ng_templae_9_div_1_div_9_div_1_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r12);
      const item_r13 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(item_r13.selectedAnswer, $event) || (item_r13.selectedAnswer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "small", 75)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " / 200 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r13.Question);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r13.IsMandatory);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("name", item_r13.QuestionId);
    \u0275\u0275property("placeholder", item_r13.IsMandatory ? "Required" : "Optional")("required", item_r13.IsMandatory)("value", item_r13.selectedAnswer || null);
    \u0275\u0275twoWayProperty("ngModel", item_r13.selectedAnswer);
    \u0275\u0275property("errorStateMatcher", ctx_r2.matcher);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r13.charCount ? 200 - item_r13.charCount : 200, " ");
  }
}
function PanelTestListModalComponent_div_6_ng_templae_9_div_1_div_9_div_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function PanelTestListModalComponent_div_6_ng_templae_9_div_1_div_9_div_2_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ans_r15 = ctx.$implicit;
    \u0275\u0275property("value", ans_r15.AnswerFullText);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ans_r15.AnswerFullText, " ");
  }
}
function PanelTestListModalComponent_div_6_ng_templae_9_div_1_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "label", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PanelTestListModalComponent_div_6_ng_templae_9_div_1_div_9_div_2_span_3_Template, 2, 0, "span", 72);
    \u0275\u0275elementStart(4, "div", 73)(5, "div", 76)(6, "select", 77);
    \u0275\u0275listener("change", function PanelTestListModalComponent_div_6_ng_templae_9_div_1_div_9_div_2_Template_select_change_6_listener($event) {
      \u0275\u0275restoreView(_r14);
      const item_r13 = \u0275\u0275nextContext().$implicit;
      const testData_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onAnswerChange($event, item_r13, testData_r11));
    });
    \u0275\u0275twoWayListener("ngModelChange", function PanelTestListModalComponent_div_6_ng_templae_9_div_1_div_9_div_2_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r14);
      const item_r13 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(item_r13.selectedAnswer, $event) || (item_r13.selectedAnswer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(7, "option", 78);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, PanelTestListModalComponent_div_6_ng_templae_9_div_1_div_9_div_2_option_9_Template, 2, 2, "option", 79);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r13.Question);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r13.IsMandatory);
    \u0275\u0275advance(3);
    \u0275\u0275classMapInterpolate1("form-control custom-select ", ctx_r2.isSubmitted ? "submitted" : "", "");
    \u0275\u0275propertyInterpolate("name", item_r13.QuestionId);
    \u0275\u0275property("placeholder", item_r13.IsMandatory ? "Required" : "Optional")("required", item_r13.IsMandatory);
    \u0275\u0275twoWayProperty("ngModel", item_r13.selectedAnswer);
    \u0275\u0275property("errorStateMatcher", ctx_r2.matcher);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r13.IsMandatory ? "Required" : "Optional", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", item_r13.Answers);
  }
}
function PanelTestListModalComponent_div_6_ng_templae_9_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, PanelTestListModalComponent_div_6_ng_templae_9_div_1_div_9_div_1_Template, 11, 9, "div", 69)(2, PanelTestListModalComponent_div_6_ng_templae_9_div_1_div_9_div_2_Template, 10, 12, "div", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r13.AnswerType === "Text Field");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r13.AnswerType === "Pick List");
  }
}
function PanelTestListModalComponent_div_6_ng_templae_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64)(2, "p", 65);
    \u0275\u0275listener("click", function PanelTestListModalComponent_div_6_ng_templae_9_div_1_Template_p_click_2_listener() {
      \u0275\u0275restoreView(_r10);
      const testData_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleAccordion(testData_r11));
    });
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "em", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 67, 1)(8, "div", 68);
    \u0275\u0275template(9, PanelTestListModalComponent_div_6_ng_templae_9_div_1_div_9_Template, 3, 2, "div", 54);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r15 = \u0275\u0275nextContext();
    const testData_r11 = ctx_r15.$implicit;
    const i_r17 = ctx_r15.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", testData_r11.TestName, " ");
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate1("id", "toggleIcon_", testData_r11.OrderCode, "");
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(10, _c33, testData_r11["isValidated"] === 1 ? "green" : testData_r11["isValidated"] === 2 ? "red" : ctx_r2.grey))("ngClass", i_r17 === ctx_r2.selectedTestIndex ? "fa-chevron-circle-down" : "fa-chevron-circle-right");
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("ngModelGroup", testData_r11.OrderCode);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate1("id", "accordion_", testData_r11.OrderCode, "");
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(12, _c43, i_r17 === ctx_r2.selectedTestIndex ? "block" : "none"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", testData_r11.AOEQuestions);
  }
}
function PanelTestListModalComponent_div_6_ng_templae_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ng-templae");
    \u0275\u0275template(1, PanelTestListModalComponent_div_6_ng_templae_9_div_1_Template, 10, 14, "div", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const testData_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", testData_r11.AOEQuestions.length > 0 && !ctx_r2.editableTest || ctx_r2.editableTest && testData_r11.AOEQuestions.length > 0 && testData_r11.isEditable);
  }
}
function PanelTestListModalComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "p", 57)(2, "span", 58);
    \u0275\u0275text(3, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, " Indicates a required field");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 59)(7, "section", 60)(8, "div", 61);
    \u0275\u0275template(9, PanelTestListModalComponent_div_6_ng_templae_9_Template, 2, 1, "ng-templae", 54);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r2.filteredArray);
  }
}
function PanelTestListModalComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 81);
    \u0275\u0275text(1, " Please answer all required questions. ");
    \u0275\u0275elementEnd();
  }
}
function PanelTestListModalComponent_div_8_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 86);
    \u0275\u0275listener("click", function PanelTestListModalComponent_div_8_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.back());
    });
    \u0275\u0275text(1, " Change/Add Panel ");
    \u0275\u0275elementEnd();
  }
}
function PanelTestListModalComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275template(1, PanelTestListModalComponent_div_8_button_1_Template, 2, 0, "button", 83);
    \u0275\u0275elementStart(2, "button", 84);
    \u0275\u0275listener("click", function PanelTestListModalComponent_div_8_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCancelSubmit());
    });
    \u0275\u0275text(3, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.editableTest);
  }
}
function PanelTestListModalComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "button", 88);
    \u0275\u0275listener("click", function PanelTestListModalComponent_div_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetBack());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 89);
    \u0275\u0275listener("click", function PanelTestListModalComponent_div_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.SelectedAddtest());
    })("keydown.enter", function PanelTestListModalComponent_div_9_Template_button_keydown_enter_3_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.SelectedAddtest());
    });
    \u0275\u0275text(4, " Next ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Cancel, " ");
  }
}
var MyErrorStateMatcher = class {
  constructor(isSubmittedState) {
    this.isSubmittedState = isSubmittedState;
  }
  isErrorState(control, form) {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (isSubmitted || typeof this.isSubmittedState != "undefined"));
  }
};
var PanelTestListModalComponent = class _PanelTestListModalComponent {
  constructor(activeModal, ngZone, formBuilder, refLabService, userService, labelService, headerService, modalService, commonService, dataService, confirmationDialogService, router, route) {
    this.activeModal = activeModal;
    this.ngZone = ngZone;
    this.formBuilder = formBuilder;
    this.refLabService = refLabService;
    this.userService = userService;
    this.labelService = labelService;
    this.headerService = headerService;
    this.modalService = modalService;
    this.commonService = commonService;
    this.dataService = dataService;
    this.confirmationDialogService = confirmationDialogService;
    this.router = router;
    this.route = route;
    this.SearchTestName = "Search by Test Name";
    this.SelectedFav = false;
    this.filteredArray = [];
    this.section = "testSelection";
    this.disabledBtn = true;
    this.filteredOptions = [];
    this.AOEQuestions = [];
    this.selectedTestIndex = 0;
    this.isSubmitted = false;
    this.matcher = new MyErrorStateMatcher();
    this.labelService.getCreateOrderScreenLabels();
    this.label = this.labelService.createOrderScreen;
    this.isViewDOSPrice = this.dataService.appData.authDetails["IsViewDOSPrice"];
  }
  ngOnInit() {
    this.getorderTest();
    this.getDosfilter();
    if (this.editableTest) {
      this.section = "moreInfo";
      this.ownerpopupTitle = "Edit Selected Test";
      this.matcher = new MyErrorStateMatcher(true);
      this.isSubmitted = true;
    }
  }
  getorderTest() {
    const Test = {
      SearchText: this.SearchTestName !== "Search by Test Name" && this.searchText || "",
      SearchTestName: this.SearchTestName === "Search by Test Name" && this.searchText || "",
      ClassName: this.SelectedClass,
      Menu: this.selectedMenu,
      IsOrder: true,
      UserGuid: this.headerService.loginUserGuid,
      IsFavourite: this.SelectedFav
    };
    this.refLabService.getOrderTestList(Test).subscribe((data) => {
      this.OrderTestData = data.ResponseData.TestDetail;
      this.filterDatafor = this.OrderTestData;
      this.filteredArray = this.filteredArray.length > 0 ? this.filteredArray : this.selectedArray;
      this.filteredArray = this.filteredArray.map((ele, index) => {
        if (this.editableTest && this.editableTest.OrderCode == ele.OrderCode) {
          this.selectedTestIndex = index;
          ele.isEditable = true;
        } else {
          ele.isEditable = false;
        }
        return ele;
      });
      console.log("filteredArray after fetched data ==>", this.filteredArray);
      if (this.filteredArray.length) {
        this.filteredArray.forEach((x) => {
          const item = this.filterDatafor.find((y) => y.OrderCode == x.OrderCode);
          if (item) {
            item.isChecked = true;
            item.selfNote = x.selfNote;
          }
        });
      }
    }, (err) => {
      console.log(JSON.stringify(err));
      this.commonService.showCommonToastrError();
    });
  }
  getDosfilter() {
    this.commonService.GetDOSFilterdetails().subscribe((data) => {
      this.filterClassData = data.ResponseData.Class;
      this.filterMenuData = data.ResponseData.Menu;
    }, (err) => {
      console.log(JSON.stringify(err));
      this.commonService.showCommonToastrError();
    });
  }
  clearSearchField() {
    this.searchText = "";
    this.filterDatafor = this.OrderTestData.map((a) => __spreadValues({}, a));
    if (this.selectedArray.length) {
      this.selectedArray.forEach(() => {
        this.selectedArray.forEach((x) => {
          const item = this.filterDatafor.find((y) => y.OrderCode == x.OrderCode);
          if (item) {
            item.isChecked = true;
            item.selfNote = x.selfNote;
          }
        });
      });
    }
  }
  clearAll() {
    this.searchText = "";
    this.selectedMenu = "";
    this.SelectedClass = "";
    this.menuSelected = "";
    this.SelectedFav = false;
    this.SearchTestName = "Search by Test Name";
    this.filteredArray = [];
    this.filterDatafor = this.OrderTestData.map((a) => __spreadValues({}, a));
    this.filterDatafor.map((data) => {
      data.isChecked = false;
    });
    this.getorderTest();
  }
  onSelect(selectedItem) {
    selectedItem.isChecked = !!selectedItem.isChecked;
  }
  updateFilterArray(event, order) {
    if (event.checked) {
      this.filteredArray.push(order);
    } else {
      const idx = this.filteredArray.findIndex((x) => x.TestId == order.TestId);
      this.filteredArray.splice(idx, 1);
    }
    const nextBtn = document.getElementById("nextBtn");
    if (nextBtn) {
      nextBtn.focus();
    }
  }
  back() {
    this.section = "testSelection";
    this.ownerpopupTitle = "Select Tests";
  }
  resetBack() {
    this.section = "testSelection";
    this.ownerpopupTitle = "Select Tests";
    this.searchText = "";
    this.selectedMenu = "";
    this.SelectedClass = "";
    this.SelectedFav = false;
    this.isSubmitted = false;
    console.log(this.orderTestsForm);
    this.modalService.dismissAll();
  }
  // public toggleBtn(val: any = null, item: any = null) {
  //   
  //   if (item) item.selfNote = val;
  //   // const reqItems = this.filterDatafor.filter(ele => ele.isChecked).filter((x) => {
  //   const reqItems = this.filteredArray.filter((x) => {
  //     if (x.noteRequired) {
  //       return !x.selfNote;
  //     }
  //   });
  //   this.disabledBtn = reqItems.length > 0;
  // }
  SelectedAddtest(formData) {
    if (formData) {
      console.log("formData ==>", formData);
      if (formData && formData.form.status == "INVALID") {
        this.checkFormValidation();
        return;
      } else {
        for (const testElement in formData.form.value) {
          const testObj = {
            Code: testElement,
            Notes: null,
            AOEDetail: []
          };
          const qa = formData.form.value[testElement];
          for (const qaElement in qa) {
            if (qa[qaElement]) {
              testObj.AOEDetail.push({
                QuestionId: qaElement,
                Answers: [{ AnswerFullText: qa[qaElement] }]
              });
            }
          }
          this.filteredArray.map((ele) => {
            if (ele.OrderCode == testElement) {
              ele.selectedQA = testObj;
            }
          });
        }
        console.log("selectedQA Added ==> ", this.filteredArray);
      }
    }
    let selectedTest = this.filterDatafor.filter((ele) => ele.isChecked);
    selectedTest = selectedTest.map((ele) => {
      this.selectedArray.map((item) => {
        if (ele.TestId == item.TestId) {
          ele = item;
        }
      });
      return ele;
    });
    this.filteredArray = [.../* @__PURE__ */ new Set([...this.filteredArray, ...selectedTest])];
    this.filteredArray = this.filteredArray.filter((obj, index) => {
      return index === this.filteredArray.findIndex((o) => obj.OrderCode === o.OrderCode);
    });
    let isFirstFound = false;
    const filteredArray = this.filteredArray.filter((ele, index) => {
      if (ele.AOEQuestions.length > 0) {
        if (!isFirstFound) {
          isFirstFound = true;
          this.selectedTestIndex = index;
        }
        ele.haseQuestion = true;
        ele.AOEQuestions.forEach((y) => {
          if (y.AnswerType == "Pick List" && !y.selectedAnswer) {
            y.selectedAnswer = "";
          }
        });
        return true;
      }
    });
    console.log("filteredArray -1 =============> ", this.filteredArray);
    if (this.filteredArray.length) {
      if (filteredArray.length && this.section == "testSelection") {
        this.section = "moreInfo";
        this.ownerpopupTitle = "Additional Information";
        setTimeout(() => {
          if (this.orderTestsForm && this.orderTestsForm.form && this.orderTestsForm.form.status == "INVALID") {
            this.filteredArray.map((ele) => {
              if (typeof ele.isValidated != "undefined") {
                this.isSubmitted = true;
              }
            });
            this.checkFormValidation();
          }
        });
        return;
      }
      this.selectedArray = this.filteredArray;
      this.dataService.pageState["filterDatafor"] = this.filterDatafor;
      this.dataService.pageState["selectedArray"] = this.selectedArray;
      this.dataService.page.next(this.dataService.pageState);
      this.searchText = "";
      this.selectedMenu = "";
      this.SelectedClass = "";
      this.SelectedFav = false;
      this.modalService.dismissAll();
    }
  }
  onAnswerChange(event, item) {
    if (item.AnswerType == "Pick List") {
      item.Answers.map((ele) => {
        if (ele.AnswerFullText == event.target.value) {
          ele.Selected = true;
        } else {
          ele.Selected = false;
        }
        return ele;
      });
      item.selectedAnswer = event.target.value;
      console.log("DDN Answer value is: ", event.target.value);
    } else {
      item.Answers = event.target.value;
      item.selectedAnswer = event.target.value;
      item.charCount = event.target.value.length;
    }
    this.checkFormValidation();
  }
  onCancelSubmit() {
    this.dataService.pageState["selectedArray"] = this.prevSelectedArray;
    this.dataService.page.next(this.dataService.pageState);
    this.modalService.dismissAll();
  }
  onSubmit(formData) {
    this.isSubmitted = true;
    console.log("Form Value ==>", this.orderTestsForm.value);
    this.checkFormValidation();
    this.SelectedAddtest(formData);
  }
  checkFormValidation() {
    if (this.isSubmitted) {
      this.matcher = new MyErrorStateMatcher(true);
      const formGroups = this.orderTestsForm.controls;
      for (const fg in formGroups) {
        if (formGroups[fg] && formGroups[fg]["controls"]) {
          for (const i in formGroups[fg]["controls"]) {
            formGroups[fg]["controls"][i].updateValueAndValidity();
          }
        }
        this.filteredArray.filter((ele) => {
          if (fg == ele.OrderCode) {
            if (ele.AOEQuestions.length > 0) {
              const hasRequired = ele.AOEQuestions.filter((item) => item.IsMandatory);
              if (formGroups[fg].valid && hasRequired && hasRequired.length > 0) {
                ele.isValidated = 1;
              } else {
                ele.isValidated = 2;
              }
              if (formGroups[fg].valid && hasRequired && hasRequired.length == 0) {
                ele.isValidated = 0;
              }
            }
          }
        });
      }
    }
  }
  toggleAccordion(test) {
    const testId = test.OrderCode;
    const accordion = document.getElementById("accordion_" + testId);
    const toggleIcon = document.getElementById("toggleIcon_" + testId);
    if (accordion.style.display == "block") {
      accordion.style.display = "none";
      toggleIcon.classList.remove("fa-chevron-circle-down");
      toggleIcon.classList.add("fa-chevron-circle-right");
    } else {
      accordion.style.display = "block";
      toggleIcon.classList.remove("fa-chevron-circle-right");
      toggleIcon.classList.add("fa-chevron-circle-down");
    }
  }
  static {
    this.\u0275fac = function PanelTestListModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PanelTestListModalComponent)(\u0275\u0275directiveInject(NgbActiveModal), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(RefLabService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(LabelService), \u0275\u0275directiveInject(HeaderService), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(ConfirmationDialogService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PanelTestListModalComponent, selectors: [["app-panel-test-list-modal"]], viewQuery: function PanelTestListModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.orderTestsForm = _t.first);
      }
    }, inputs: { headerText: "headerText", ownerpopupTitle: "ownerpopupTitle", OrderTestData: "OrderTestData", filterDatafor: "filterDatafor", selectedArray: "selectedArray", editableTest: "editableTest", prevSelectedArray: "prevSelectedArray" }, decls: 10, vars: 6, consts: [["orderTestsForm", "ngForm"], ["testQuestions", "ngModelGroup"], [1, "modal-header", "text-center"], ["id", "modal-basic-title", 1, "modal-title", "w-100"], ["class", "modal-body filter_wrapper", 4, "ngIf"], [1, "touchedValidation", 3, "ngSubmit"], ["class", "modal-body filter_wrapper filter-part", 4, "ngIf"], ["class", "validation-message", 4, "ngIf"], ["class", "modal-footer modal-part row mt-3 pt-0 justify-content-center", 4, "ngIf"], ["class", "modal-footer row mt-3 pt-0 justify-content-center", 4, "ngIf"], [1, "modal-body", "filter_wrapper"], [1, "d-flex", "justify-content-start", "flex-wrap", "align-items-center", "mb-3"], ["id", "filer_by_menu", 1, "asrch", 2, "width", "15%"], ["appearance", "outline", "floatLabel", "always", 1, "dotpart", "w-100"], ["ngDefaultControl", "", 3, "ngModelChange", "ngModel"], ["value", "Search by Test Name", 3, "ngClass"], ["value", "Search all fields", 3, "ngClass"], [1, "asrch", 2, "width", "20%"], ["appearance", "outline", "floatLabel", "always", 1, "w-100"], ["ngDefaultControl", "", "matInput", "", "maxlength", "60", "autocomplete", "off", 3, "ngModelChange", "keydown.enter", "ngModel", "placeholder"], ["matPrefix", ""], ["src", "../../../../assets/img/search-icon.png", "alt", "search-icon"], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [1, "asrch", 2, "width", "35%"], [1, "float-right", "pull-right"], ["appearance", "outline", "floatLabel", "always", 1, "float-left", "w-60"], ["ngDefaultControl", "", 3, "ngModelChange", "placeholder", "ngModel"], ["class", "formselect", 3, "value", 4, "ngFor", "ngForOf"], [1, "float-left", "w-40", "mt-2", "pl-2"], ["value", "checked", "ngDefaultControl", "", 1, "example-margin", 3, "ngModelChange", "ngModel"], [1, "asearch", 2, "width", "15%"], [1, "del_doc", "col1", "float-right"], [1, "clrall", "mr-2", 3, "click"], ["ngbAutofocus", "", "mat-raised-button", "", 1, "w-70", "g-btn", 2, "order", "2", 3, "click"], [1, "asearch", 2, "width", "12%", "text-align", "right"], ["mat-raised-button", "", "target", "_blank", 1, "w-70", "g-btn", "policy-btn", 2, "order", "3", 3, "click"], [1, "d-flex", "flex-wrap", "chkbox_wrapper"], [1, "d-flex", "align-content-start", "flex-wrap", "w-100"], ["class", "w-50   del_doc del_doc1  pr-4", 3, "click", 4, "ngFor", "ngForOf"], ["class", "w-100 text-center", 4, "ngIf"], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", "aria-label", "Clear", 3, "click"], [1, "formselect", 3, "value"], [1, "w-50", "del_doc", "del_doc1", "pr-4", 3, "click"], [1, "mb-3", "d-flex", "align-items-center", "justify-content-between", "w-100"], ["ngDefaultControl", "", 1, "example-margin", "d-flex", "align-items-center", 3, "change", "ngModelChange", "ngModel"], [3, "ngClass"], ["color", "accent", 1, "chk_label"], ["matTooltipPosition", "above", 3, "matTooltip", 4, "ngIf"], [4, "ngIf"], ["class", "d-flex tests-box", 4, "ngIf"], ["matTooltipPosition", "above", 3, "matTooltip"], [1, "d-flex", "tests-box"], [1, "col-3", "justify-content"], [1, "testheader", "justify-content"], [4, "ngFor", "ngForOf"], [1, "w-100", "text-center"], [1, "modal-body", "filter_wrapper", "filter-part"], [1, "text-right", "p-0", "m-0"], [1, "astric"], [1, "qa-content"], [1, "row"], [1, "col-12"], ["class", "order-tests-accordion", 4, "ngIf"], [1, "order-tests-accordion"], [1, "accordion-header"], [3, "click"], [1, "fa", "fa-2x", 3, "id", "ngStyle", "ngClass"], [3, "ngModelGroup"], [1, "accordion-body", 3, "id", "ngStyle"], ["class", "mb-3", 4, "ngIf"], [1, "mb-3"], [1, "pb-2"], ["class", "astric", 4, "ngIf"], [1, "w-100"], ["matInput", "", "type", "text", "maxlength", "200", 3, "keyup", "ngModelChange", "name", "placeholder", "required", "value", "ngModel", "errorStateMatcher"], [1, "form-text", "text-muted", "text-right"], [1, "form-group"], [3, "change", "ngModelChange", "placeholder", "name", "required", "ngModel", "errorStateMatcher"], ["selected", "", "disabled", "", "hidden", "", "value", ""], ["class", "formselect formpart", 3, "value", 4, "ngFor", "ngForOf"], [1, "formselect", "formpart", 3, "value"], [1, "validation-message"], [1, "modal-footer", "modal-part", "row", "mt-3", "pt-0", "justify-content-center"], ["type", "button", "class", "cancel-btn mr-2 cl-btn", "mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["type", "button", "mat-raised-button", "", "color", "primary", 1, "cancel-btn", "mr-1", "cl-add", 3, "click"], ["type", "submit", "value", "Continue", "mat-raised-button", "", "color", "accent", 1, "btn", "mr-2", "save-change", "btn-new"], ["type", "button", "mat-raised-button", "", "color", "primary", 1, "cancel-btn", "mr-2", "cl-btn", 3, "click"], [1, "modal-footer", "row", "mt-3", "pt-0", "justify-content-center"], ["type", "button", "mat-raised-button", "", "color", "primary", 1, "cancel-btn", "mr-2", 3, "click"], ["type", "button", "id", "nextBtn", "mat-raised-button", "", "color", "accent", 1, "save-change", "mr-2", 3, "click", "keydown.enter"]], template: function PanelTestListModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "h4", 3);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, PanelTestListModalComponent_div_3_Template, 36, 16, "div", 4);
        \u0275\u0275elementStart(4, "form", 5, 0);
        \u0275\u0275listener("ngSubmit", function PanelTestListModalComponent_Template_form_ngSubmit_4_listener() {
          \u0275\u0275restoreView(_r1);
          const orderTestsForm_r9 = \u0275\u0275reference(5);
          return \u0275\u0275resetView(ctx.onSubmit(orderTestsForm_r9));
        });
        \u0275\u0275template(6, PanelTestListModalComponent_div_6_Template, 10, 1, "div", 6)(7, PanelTestListModalComponent_p_7_Template, 2, 0, "p", 7)(8, PanelTestListModalComponent_div_8_Template, 5, 1, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, PanelTestListModalComponent_div_9_Template, 5, 1, "div", 9);
      }
      if (rf & 2) {
        const orderTestsForm_r9 = \u0275\u0275reference(5);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.ownerpopupTitle, " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.section === "testSelection");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.section === "moreInfo");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isSubmitted && !orderTestsForm_r9.valid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.section === "moreInfo");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.section === "testSelection");
      }
    }, dependencies: [NgClass, NgForOf, NgIf, NgStyle, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MaxLengthValidator, NgModel, NgModelGroup, NgForm, MatLegacyFormField, MatLegacyPrefix, MatLegacySuffix, MatLegacyInput, MatLegacyButton, MatLegacyAnchor, MatIcon, MatLegacyCheckbox, MatLegacySelect, MatLegacyOption, MatLegacyTooltip], styles: ['\n\n.example-container1[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  position: relative;\n  z-index: 0;\n}\n.tests-box[_ngcontent-%COMP%] {\n  background: #F1F1F1;\n  border-radius: 4px;\n  padding: 6px;\n  margin: 1rem 0;\n}\n.tests-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-top: 0.4rem;\n  display: block;\n  font-size: 13px;\n}\n.tests-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.2;\n  font-size: 13px;\n}\n.tests-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  height: 15px;\n  display: block;\n}\n.testheader[_ngcontent-%COMP%] {\n  color: #000;\n}\n.save-change[_ngcontent-%COMP%] {\n  background-color: #ff6400;\n  color: #fff;\n  min-width: 125px;\n}\n.g-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fd6400;\n  border-color: #fd6400;\n}\n.add-patient[_ngcontent-%COMP%] {\n  color: #f65c00;\n  font-weight: 1000;\n  background-color: #fff;\n  border: 2px solid #f65c00;\n  min-width: 180px;\n  height: 32px !important;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  min-width: 125px;\n  border: 1px solid #b9babb;\n  background: #edebeb99 !important;\n  color: #747576 !important;\n}\n.dotdosskyBlue[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #2d68c4;\n}\n.dotdosGreen[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #31b44a;\n}\n.dotdosorange[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #fed504;\n}\n.dotdosequine[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #006271;\n}\n.dotdosBlue[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #a0dcee;\n}\n.dotdosallother[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #a884bb;\n}\n#full_page_temp[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  margin-bottom: 0px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.w-90[_ngcontent-%COMP%] {\n  width: 90%;\n}\n#full_page_temp[_ngcontent-%COMP%]   .filter_wrapper[_ngcontent-%COMP%]   .mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%] {\n  line-height: 17px;\n  font-size: 13px;\n  width: 90%;\n  word-break: break-word;\n  white-space: break-spaces;\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  width: 90% !important;\n}\n.chk_label[_ngcontent-%COMP%] {\n  line-height: 24px;\n  width: 90% !important;\n  word-break: break-word;\n  white-space: break-spaces !important;\n}\n.chkbox_wrapper[_ngcontent-%COMP%] {\n  height: calc(100vh - 350px);\n  overflow: auto;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 13px;\n  margin-bottom: 0px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-left: 15px;\n  margin-bottom: 20px;\n}\n.test_text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  border-radius: 6px;\n  padding: 5px 7px;\n  background: #eeeeeee8;\n}\n.text-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none !important;\n}\n.head1[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n.test_text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  bottom: 1px;\n}\n.tooltip[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  font-size: 13px;\n  opacity: 1;\n}\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 270px;\n  background-color: #fff;\n  color: #000;\n  border-radius: 6px;\n  padding: 0;\n  position: absolute;\n  z-index: 1;\n  top: 0px;\n  right: 128%;\n  box-shadow: 0 0 12px 0 rgb(0 0 0 / 19%) !important;\n}\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.tool_header[_ngcontent-%COMP%] {\n  background: #0072ce;\n  padding: 16px 0;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  color: #fff;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.tool_text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.norecord[_ngcontent-%COMP%] {\n  width: 99.1% !important;\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  border: 1px solid #ccc9;\n  border-top: transparent;\n  background-color: #fbfbfb;\n}\n  .my-Owner .modal-dialog {\n  max-width: 80% !important;\n  width: 80% !important;\n}\n  .my-Test .modal-dialog {\n  max-width: 100% !important;\n  width: 90% !important;\n}\n  .my-Note .modal-dialog {\n  max-width: 50% !important;\n  width: 50% !important;\n}\n.subtext[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n}\n.option_outer[_ngcontent-%COMP%] {\n  line-height: 16px;\n}\n.docIcon[_ngcontent-%COMP%] {\n  width: 35px;\n  display: inline-block;\n  position: relative;\n  top: 5px;\n  text-align: center;\n  color: #007bff;\n}\n  .docIcon .material-icons {\n  font-size: 17px !important;\n}\n  .docIcon .mat-icon {\n  height: 14px !important;\n  width: 14px !important;\n}\n.addpanel[_ngcontent-%COMP%] {\n  max-height: 116px;\n  overflow-y: scroll;\n  padding-top: 5px;\n}\n.blankTxt.alert[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.errtxt[_ngcontent-%COMP%] {\n  color: #9a9a9a;\n  font-style: italic;\n  font-weight: bold;\n}\n.frstTxt[_ngcontent-%COMP%] {\n  color: #9a9a9a;\n  font-size: 13px;\n  font-weight: bold;\n}\n.liner[_ngcontent-%COMP%] {\n  width: 97%;\n  height: 2px;\n  background-color: #f2e9e9;\n  margin-bottom: 0;\n}\n.Rtxt[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.placeh[_ngcontent-%COMP%] {\n  color: #9a9a9a;\n  font-style: italic;\n  font-size: 11px;\n}\n.matpoint[_ngcontent-%COMP%]   .mat-option[_ngcontent-%COMP%] {\n  display: table-caption;\n}\n.formselect.mat-option[_ngcontent-%COMP%] {\n  display: flex;\n}\n.max-reach[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 42rem;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n}\n.clrall[_ngcontent-%COMP%] {\n  color: #0072ce !important;\n  font-family: "GothamNarrowBold", sans-serif;\n  cursor: pointer;\n  font-weight: bold;\n  text-decoration: underline;\n}\n.asrch[_ngcontent-%COMP%] {\n  width: 24%;\n}\n.frow[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background: #fff;\n  z-index: 9999;\n  width: 840px;\n}\n.docIcon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  top: -5px;\n  position: relative;\n  font-size: 15px;\n}\n  .modal {\n  z-index: 1055 !important;\n}\n  .modal-backdrop {\n  z-index: 1050 !important;\n}\n@media screen and (max-width: 767px) {\n  .left-block1[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n  .example-container1[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n  .colpart[_ngcontent-%COMP%] {\n    min-width: 100%;\n    margin-bottom: 20px;\n  }\n  .w-90[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .pimg[_ngcontent-%COMP%] {\n    padding-left: 10px;\n  }\n  .mcol[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n    .my-Owner .modal-dialog {\n    max-width: 100% !important;\n    width: 95% !important;\n  }\n  .asrch[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .del_doc.del_doc1[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin-bottom: 10px;\n  }\n}\n.checkmark[_ngcontent-%COMP%]:before {\n  content: "L";\n  font-family: "gothambook", sans-serif;\n  transform: scaleX(-1) rotate(-35deg);\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 1em;\n  width: 1em;\n  color: #000000c7;\n  height: 1em;\n  position: absolute;\n  left: 90%;\n  top: 10px;\n}\n.order-tests-accordion[_ngcontent-%COMP%] {\n  margin: 14px 0px;\n  -webkit-box-shadow: -1px 1px 5px 4px rgb(209 207 209 / 50%);\n  -moz-box-shadow: -1px 1px 5px 4px rgb(209 207 209 / 50%);\n  box-shadow: -1px 1px 5px 4px rgb(209 207 209 / 50%);\n  border-radius: 5px;\n}\n.order-tests-accordion[_ngcontent-%COMP%]   .accordion-header[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #80808026;\n  padding: 14px 14px 0px 14px;\n}\n.order-tests-accordion[_ngcontent-%COMP%]   .accordion-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n}\n.order-tests-accordion[_ngcontent-%COMP%]   .accordion-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  float: right;\n  color: #969696;\n}\n.order-tests-accordion[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%] {\n  padding: 14px;\n}\n  .modal-dialog {\n  max-width: 100% !important;\n  width: 1000px !important;\n  margin: 0 auto;\n  margin-top: 1.75rem;\n}\n.accordion-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #212529;\n}\n.accordion-body[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: "gothambook", sans-serif;\n  font-size: 14px;\n  padding-bottom: 0 !important;\n}\n.cl-btn[_ngcontent-%COMP%] {\n  background: transparent !important;\n  border: 1px solid #0072ce;\n  color: #0072ce !important;\n}\n.cl-add[_ngcontent-%COMP%] {\n  background: #edebeb99 !important;\n  border: 1px solid #b9babb;\n  color: #747576 !important;\n}\n.qa-content[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\n.astric[_ngcontent-%COMP%] {\n  color: #ff0000 !important;\n  font-size: 20px;\n  font-weight: bolder;\n}\n.validation-message[_ngcontent-%COMP%] {\n  color: red;\n  text-align: center;\n}\n.filter-part[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 180px);\n  overflow: auto !important;\n  margin-bottom: 4rem;\n}\n.modal-footer.modal-part[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background: #fff;\n  z-index: 9999;\n}\n.filter_wrapper.modal-body[_ngcontent-%COMP%] {\n  padding: 1rem !important;\n}\n.btn-new[_ngcontent-%COMP%] {\n  padding: 6px 0;\n  font-size: 14px;\n  font-family: "gothambook", sans-serif;\n}\n.order-tests-accordion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #d1cece;\n  margin-top: -7px;\n}\n.order-tests-accordion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n  margin-bottom: 5px;\n}\nform.touchedValidation[_ngcontent-%COMP%]   select.submitted.ng-invalid[_ngcontent-%COMP%] {\n  border: 2px solid red !important;\n}\nselect[_ngcontent-%COMP%]:has(option[value=""]:checked) {\n  color: #a5a5a6;\n  font-size: 15px;\n  font-weight: 100;\n}\nselect[_ngcontent-%COMP%] {\n  background-color: #fbfbfc !important;\n}\nselect[_ngcontent-%COMP%]   option.formselect.formpart[_ngcontent-%COMP%] {\n  color: #495057;\n  background-color: #fbfbfc !important;\n}\n/*# sourceMappingURL=panel-test-list-modal.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PanelTestListModalComponent, { className: "PanelTestListModalComponent", filePath: "src\\app\\modules\\refrence-lab\\orders\\panel-test-list-modal\\panel-test-list-modal.component.ts", lineNumber: 34 });
})();

// src/app/modules/refrence-lab/orders/create-orders/create-orders.component.ts
var _c04 = (a0) => ({ "checkmark": a0 });
var _c14 = (a0, a1, a2, a3, a4, a5) => ({ dotdosskyBlue: a0, dotdosGreen: a1, dotdosorange: a2, dotdosequine: a3, dotdosBlue: a4, dotdosallother: a5 });
function CreateOrdersComponent_mat_form_field_22_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doctor_r4 = ctx.$implicit;
    \u0275\u0275property("value", doctor_r4.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", doctor_r4.FirstName, " ", doctor_r4.LastName, " (", doctor_r4.Id, ") ");
  }
}
function CreateOrdersComponent_mat_form_field_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 51)(1, "mat-select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function CreateOrdersComponent_mat_form_field_22_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedRefID.SelectedRefLabProviderId, $event) || (ctx_r2.selectedRefID.SelectedRefLabProviderId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(2, CreateOrdersComponent_mat_form_field_22_mat_option_2_Template, 2, 4, "mat-option", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r2.label.SelectDoctorID);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedRefID.SelectedRefLabProviderId);
    \u0275\u0275property("errorStateMatcher", ctx_r2.matcher);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.DoctorList);
  }
}
function CreateOrdersComponent_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 55);
    \u0275\u0275text(1, " Please select a provider. ");
    \u0275\u0275elementEnd();
  }
}
function CreateOrdersComponent_mat_option_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 56)(1, "div", 57)(2, "div", 58);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", item_r5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.ownerpetDdlDetails(item_r5), " ");
  }
}
function CreateOrdersComponent_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 55);
    \u0275\u0275text(1, " Please select a patient from the list or add a new patient. ");
    \u0275\u0275elementEnd();
  }
}
function CreateOrdersComponent_div_44_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1, " At least 3 characters is needed to search for a patient ");
    \u0275\u0275elementEnd();
  }
}
function CreateOrdersComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275template(1, CreateOrdersComponent_div_44_div_1_Template, 2, 0, "div", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.petForm.controls["selOwner"].value.length < 3 && ctx_r2.petForm.controls["selOwner"].errors.noSelection);
  }
}
function CreateOrdersComponent_mat_error_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 55);
    \u0275\u0275text(1, " Please select a panel/test. ");
    \u0275\u0275elementEnd();
  }
}
function CreateOrdersComponent_span_56_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 66);
    \u0275\u0275text(1, " create ");
    \u0275\u0275elementEnd();
  }
}
function CreateOrdersComponent_span_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "a", 63);
    \u0275\u0275listener("click", function CreateOrdersComponent_span_56_Template_a_click_2_listener() {
      const test_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openPanelTestListModal(test_r8));
    });
    \u0275\u0275template(3, CreateOrdersComponent_span_56_mat_icon_3_Template, 2, 0, "mat-icon", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "img", 65);
    \u0275\u0275listener("click", function CreateOrdersComponent_span_56_Template_img_click_4_listener() {
      const test_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.CancelNotes(test_r8));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const test_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", test_r8.TestName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", test_r8.haseQuestion);
  }
}
function CreateOrdersComponent_ng_template_69_option_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const gender_r10 = ctx.$implicit;
    \u0275\u0275property("value", gender_r10.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", gender_r10.Name, " ");
  }
}
function CreateOrdersComponent_ng_template_69_option_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const species_r12 = ctx.$implicit;
    \u0275\u0275property("value", species_r12.Name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", species_r12.Name, " ");
  }
}
function CreateOrdersComponent_ng_template_69_ng_container_85_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const breed_r13 = ctx.$implicit;
    \u0275\u0275property("value", breed_r13.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", breed_r13.Name, " ");
  }
}
function CreateOrdersComponent_ng_template_69_ng_container_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "select", 88);
    \u0275\u0275template(2, CreateOrdersComponent_ng_template_69_ng_container_85_option_2_Template, 2, 2, "option", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.breedList);
  }
}
function CreateOrdersComponent_ng_template_69_mat_form_field_86_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "input", 89);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r2.label.EnterBreed);
  }
}
function CreateOrdersComponent_ng_template_69_mat_form_field_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 45);
    \u0275\u0275template(1, CreateOrdersComponent_ng_template_69_mat_form_field_86_ng_container_1_Template, 2, 1, "ng-container", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.breedList.length === 0);
  }
}
function CreateOrdersComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "h4", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 69)(4, "form", 70)(5, "div")(6, "h6")(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 18)(10, "div", 71)(11, "label", 72);
    \u0275\u0275text(12);
    \u0275\u0275elementStart(13, "sup");
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 73)(16, "mat-form-field", 45)(17, "input", 74);
    \u0275\u0275listener("blur", function CreateOrdersComponent_ng_template_69_Template_input_blur_17_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dataFetch());
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 71)(19, "label", 72);
    \u0275\u0275text(20);
    \u0275\u0275elementStart(21, "sup");
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 73)(24, "mat-form-field", 45);
    \u0275\u0275element(25, "input", 75);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(26, "div", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "h6")(28, "strong");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 18)(31, "div", 71)(32, "div")(33, "label");
    \u0275\u0275text(34);
    \u0275\u0275elementStart(35, "sup");
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 73)(38, "mat-form-field", 45);
    \u0275\u0275element(39, "input", 76);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 71)(41, "label");
    \u0275\u0275text(42);
    \u0275\u0275elementStart(43, "sup");
    \u0275\u0275text(44, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 73)(46, "mat-form-field", 45);
    \u0275\u0275element(47, "input", 77);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 71)(49, "label");
    \u0275\u0275text(50);
    \u0275\u0275elementStart(51, "sup");
    \u0275\u0275text(52, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 73)(54, "select", 78)(55, "option", 79);
    \u0275\u0275text(56, "Select Sex");
    \u0275\u0275elementEnd();
    \u0275\u0275template(57, CreateOrdersComponent_ng_template_69_option_57_Template, 2, 2, "option", 53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 80)(59, "label");
    \u0275\u0275text(60);
    \u0275\u0275elementStart(61, "sup");
    \u0275\u0275text(62, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 73)(64, "mat-form-field", 45)(65, "input", 81);
    \u0275\u0275listener("focus", function CreateOrdersComponent_ng_template_69_Template_input_focus_65_listener() {
      \u0275\u0275restoreView(_r9);
      const pickerFrom_r11 = \u0275\u0275reference(68);
      return \u0275\u0275resetView(pickerFrom_r11.open());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(66, "mat-datepicker-toggle", 82)(67, "mat-datepicker", null, 4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 71)(70, "label");
    \u0275\u0275text(71);
    \u0275\u0275elementStart(72, "sup");
    \u0275\u0275text(73, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div", 83)(75, "select", 84);
    \u0275\u0275listener("change", function CreateOrdersComponent_ng_template_69_Template_select_change_75_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSpeciesChange($event));
    });
    \u0275\u0275elementStart(76, "option", 79);
    \u0275\u0275text(77, "Select Species");
    \u0275\u0275elementEnd();
    \u0275\u0275template(78, CreateOrdersComponent_ng_template_69_option_78_Template, 2, 2, "option", 53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "div", 71)(80, "label");
    \u0275\u0275text(81);
    \u0275\u0275elementStart(82, "sup");
    \u0275\u0275text(83, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 73);
    \u0275\u0275template(85, CreateOrdersComponent_ng_template_69_ng_container_85_Template, 3, 1, "ng-container", 85)(86, CreateOrdersComponent_ng_template_69_mat_form_field_86_Template, 2, 1, "mat-form-field", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 71)(88, "div")(89, "label");
    \u0275\u0275text(90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 73)(92, "mat-form-field", 45);
    \u0275\u0275element(93, "input", 87);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(94, "div", 71)(95, "div", 71);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(96, "div", 47)(97, "button", 48);
    \u0275\u0275listener("click", function CreateOrdersComponent_ng_template_69_Template_button_click_97_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelOwnerDetails());
    });
    \u0275\u0275text(98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "button", 49);
    \u0275\u0275listener("click", function CreateOrdersComponent_ng_template_69_Template_button_click_99_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addOwnerDetails());
    });
    \u0275\u0275text(100);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pickerFrom_r11 = \u0275\u0275reference(68);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.ownerpopupTitle, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r2.ownerDetailsForm);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.OwnerDetails, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.label.OwnerLastName);
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", ctx_r2.label.EnterOwnerLastName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.OwnerFirstName, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", ctx_r2.label.EnterOwnerFirstName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.PatientInformation, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.label.PatientFirstName);
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", ctx_r2.label.EnterPatientFirstName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.label.PatientLastName);
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", ctx_r2.label.EnterPatientLastName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Sex, "");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.genderData);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.label.Birthday);
    \u0275\u0275advance(5);
    \u0275\u0275property("max", ctx_r2.today)("matDatepicker", pickerFrom_r11);
    \u0275\u0275advance();
    \u0275\u0275property("for", pickerFrom_r11);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.label.Species, " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", ctx_r2.label.SelectSpecies);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.SpeciesList);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.label.Breed);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.breedList.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.breedList.length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.label.Pims);
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", ctx_r2.label.PimsID);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Cancel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.AddUpdate, " ");
  }
}
function CreateOrdersComponent_ng_template_71_div_3_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 119);
    \u0275\u0275listener("click", function CreateOrdersComponent_ng_template_71_div_3_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.clearSearchField());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function CreateOrdersComponent_ng_template_71_div_3_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const filter_r16 = ctx.$implicit;
    \u0275\u0275property("value", filter_r16.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", filter_r16.Name, " ");
  }
}
function CreateOrdersComponent_ng_template_71_div_3_div_31_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ord_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ord_r19.code, " ", ord_r19.description, "");
  }
}
function CreateOrdersComponent_ng_template_71_div_3_div_31_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "small");
    \u0275\u0275text(2, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(order_r18.Price);
  }
}
function CreateOrdersComponent_ng_template_71_div_3_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275listener("click", function CreateOrdersComponent_ng_template_71_div_3_div_31_Template_div_click_0_listener() {
      const order_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onSelect(order_r18));
    });
    \u0275\u0275elementStart(1, "div", 121)(2, "mat-checkbox", 122);
    \u0275\u0275listener("change", function CreateOrdersComponent_ng_template_71_div_3_div_31_Template_mat_checkbox_change_2_listener($event) {
      const order_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateFilterArray($event, order_r18));
    });
    \u0275\u0275twoWayListener("ngModelChange", function CreateOrdersComponent_ng_template_71_div_3_div_31_Template_mat_checkbox_ngModelChange_2_listener($event) {
      const order_r18 = \u0275\u0275restoreView(_r17).$implicit;
      \u0275\u0275twoWayBindingSet(order_r18.isChecked, $event) || (order_r18.isChecked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(3, "span", 123);
    \u0275\u0275elementStart(4, "span", 124);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 125);
    \u0275\u0275element(7, "img", 126);
    \u0275\u0275elementStart(8, "div", 127)(9, "div", 128)(10, "div")(11, "small");
    \u0275\u0275text(12, "Sample Requirements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "small");
    \u0275\u0275text(17, "TAT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div")(21, "small");
    \u0275\u0275text(22, "Tube Type");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, CreateOrdersComponent_ng_template_71_div_3_div_31_div_23_Template, 2, 2, "div", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, CreateOrdersComponent_ng_template_71_div_3_div_31_div_24_Template, 5, 1, "div", 85);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const order_r18 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", order_r18.isChecked);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction6(8, _c14, order_r18.Menu === "Blue", order_r18.Menu === "Green", order_r18.Menu === "Orange", order_r18.Menu === "Equine", order_r18.Menu === "AvianExotic", order_r18.Menu === "AllOther"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", order_r18.TestName, " ", order_r18.OrderCode, "");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(order_r18.SampleRequirements);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(order_r18.TAT);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", order_r18.TubeType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isViewDOSPrice);
  }
}
function CreateOrdersComponent_ng_template_71_div_3_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Norecordsfound, " ");
  }
}
function CreateOrdersComponent_ng_template_71_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 94)(2, "div", 95)(3, "mat-form-field", 96)(4, "mat-select", 97);
    \u0275\u0275twoWayListener("ngModelChange", function CreateOrdersComponent_ng_template_71_div_3_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.SearchTestName, $event) || (ctx_r2.SearchTestName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "mat-option", 98);
    \u0275\u0275text(6, "Search by Test Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-option", 99);
    \u0275\u0275text(8, "Search all Fields ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 100)(10, "mat-form-field", 26)(11, "input", 101);
    \u0275\u0275twoWayListener("ngModelChange", function CreateOrdersComponent_ng_template_71_div_3_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.searchText, $event) || (ctx_r2.searchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function CreateOrdersComponent_ng_template_71_div_3_Template_input_keydown_enter_11_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.getorderTest());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 102);
    \u0275\u0275element(13, "img", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CreateOrdersComponent_ng_template_71_div_3_button_14_Template, 3, 0, "button", 104);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 105)(16, "div", 106)(17, "mat-form-field", 107)(18, "mat-select", 108);
    \u0275\u0275twoWayListener("ngModelChange", function CreateOrdersComponent_ng_template_71_div_3_Template_mat_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.SelectedClass, $event) || (ctx_r2.SelectedClass = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(19, CreateOrdersComponent_ng_template_71_div_3_mat_option_19_Template, 2, 2, "mat-option", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 109)(21, "mat-checkbox", 110);
    \u0275\u0275twoWayListener("ngModelChange", function CreateOrdersComponent_ng_template_71_div_3_Template_mat_checkbox_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.SelectedFav, $event) || (ctx_r2.SelectedFav = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CreateOrdersComponent_ng_template_71_div_3_Template_mat_checkbox_ngModelChange_21_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.getorderTest());
    });
    \u0275\u0275text(22, " Favorites ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 111)(24, "div", 112)(25, "a", 113);
    \u0275\u0275listener("click", function CreateOrdersComponent_ng_template_71_div_3_Template_a_click_25_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearAll());
    });
    \u0275\u0275text(26, "Clear All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 114);
    \u0275\u0275listener("click", function CreateOrdersComponent_ng_template_71_div_3_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.getorderTest(true));
    });
    \u0275\u0275text(28, " Search ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 115)(30, "div", 116);
    \u0275\u0275template(31, CreateOrdersComponent_ng_template_71_div_3_div_31_Template, 25, 15, "div", 117);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, CreateOrdersComponent_ng_template_71_div_3_div_32_Template, 2, 1, "div", 118);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.SearchTestName);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c04, ctx_r2.SearchTestName === "Search by Test Name"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c04, ctx_r2.SearchTestName === "Search all fields"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchText);
    \u0275\u0275property("placeholder", ctx_r2.label.Search);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.searchText);
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", ctx_r2.label.FilterByClass);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.SelectedClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filterClassData);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.SelectedFav);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r2.filterDatafor);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.filterDatafor == null ? null : ctx_r2.filterDatafor.length) === 0);
  }
}
function CreateOrdersComponent_ng_template_71_div_4_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 134)(1, "div", 135);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 136)(4, "label", 137);
    \u0275\u0275text(5, "Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 138)(7, "mat-form-field", 26)(8, "input", 139);
    \u0275\u0275twoWayListener("ngModelChange", function CreateOrdersComponent_ng_template_71_div_4_ng_container_2_div_1_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r20);
      const item_r21 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(item_r21.selfNote, $event) || (item_r21.selfNote = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CreateOrdersComponent_ng_template_71_div_4_ng_container_2_div_1_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r20);
      const item_r21 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleBtn($event, item_r21));
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r21.TestName);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", item_r21.selfNote);
  }
}
function CreateOrdersComponent_ng_template_71_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CreateOrdersComponent_ng_template_71_div_4_ng_container_2_div_1_Template, 9, 2, "div", 133);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r21.noteRequired);
  }
}
function CreateOrdersComponent_ng_template_71_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 131)(1, "div", 132);
    \u0275\u0275template(2, CreateOrdersComponent_ng_template_71_div_4_ng_container_2_Template, 2, 1, "ng-container", 129);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.selectedArray);
  }
}
function CreateOrdersComponent_ng_template_71_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 140)(1, "button", 48);
    \u0275\u0275listener("click", function CreateOrdersComponent_ng_template_71_div_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resetBack());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 141);
    \u0275\u0275listener("click", function CreateOrdersComponent_ng_template_71_div_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.SelectedAddtest());
    })("keydown.enter", function CreateOrdersComponent_ng_template_71_div_5_Template_button_keydown_enter_3_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.SelectedAddtest());
    });
    \u0275\u0275text(4, " Next ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Cancel, " ");
  }
}
function CreateOrdersComponent_ng_template_71_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 140)(1, "button", 48);
    \u0275\u0275listener("click", function CreateOrdersComponent_ng_template_71_div_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.back());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 142);
    \u0275\u0275listener("click", function CreateOrdersComponent_ng_template_71_div_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.SelectedAddtest());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Back, " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.disabledBtn);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Continue, " ");
  }
}
function CreateOrdersComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "h4", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, CreateOrdersComponent_ng_template_71_div_3_Template, 33, 16, "div", 90)(4, CreateOrdersComponent_ng_template_71_div_4_Template, 3, 1, "div", 91)(5, CreateOrdersComponent_ng_template_71_div_5_Template, 5, 1, "div", 92)(6, CreateOrdersComponent_ng_template_71_div_6_Template, 5, 3, "div", 92);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.ownerpopupTitle, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.section === "testSelection");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.section === "moreInfo");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.section === "testSelection");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.section === "moreInfo");
  }
}
function CreateOrdersComponent_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "h4", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 69)(4, "div", 42)(5, "div", 143)(6, "label", 44);
    \u0275\u0275text(7, " Source ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-form-field", 45)(9, "textarea", 144);
    \u0275\u0275twoWayListener("ngModelChange", function CreateOrdersComponent_ng_template_73_Template_textarea_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.UpdatedNotes, $event) || (ctx_r2.UpdatedNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(10, "div", 47)(11, "button", 48);
    \u0275\u0275listener("click", function CreateOrdersComponent_ng_template_73_Template_button_click_11_listener() {
      const modal_r25 = \u0275\u0275restoreView(_r24).$implicit;
      return \u0275\u0275resetView(modal_r25.dismiss());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 145);
    \u0275\u0275listener("click", function CreateOrdersComponent_ng_template_73_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.notesUpdate());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.ownerpopupTitle, " ");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.UpdatedNotes);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Cancel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.AddUpdate, " ");
  }
}
var MyErrorStateMatcher2 = class {
  constructor(isSubmittedState) {
    this.isSubmittedState = isSubmittedState;
  }
  isErrorState(control, form) {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (isSubmitted || typeof this.isSubmittedState != "undefined"));
  }
};
var CreateOrdersComponent = class _CreateOrdersComponent {
  constructor(fb, refLabService, userService, labelService, headerService, modalService, commonService, dataService, confirmationDialogService, datepipe, router, route) {
    this.fb = fb;
    this.refLabService = refLabService;
    this.userService = userService;
    this.labelService = labelService;
    this.headerService = headerService;
    this.modalService = modalService;
    this.commonService = commonService;
    this.dataService = dataService;
    this.confirmationDialogService = confirmationDialogService;
    this.datepipe = datepipe;
    this.router = router;
    this.route = route;
    this.selectedBusinessId = localStorage.businessGuid != void 0 && localStorage.businessGuid != null && localStorage.businessGuid != "" ? parseInt(localStorage.businessGuid) : 0;
    this.loginUserId = localStorage.authDetails != void 0 ? JSON.parse(localStorage.authDetails).Id : 0;
    this.SearchTestName = "Search by Test Name";
    this.TypeNotes = "";
    this.SelectedFav = false;
    this.selectedArray = [];
    this.filteredArray = [];
    this.GlobalSelectData = [];
    this.UpdatedNotes = [];
    this.selectedRow = [];
    this.OrderTestData = [];
    this.filterDatafor = [];
    this.conditionalData = [];
    this.today = /* @__PURE__ */ new Date();
    this.section = "testSelection";
    this.disabledBtn = true;
    this.breedList = [];
    this.title = "autocomplete";
    this.filteredOptions = [];
    this.finalArray = [];
    this.finaPatientArray = [];
    this.addorderDetailRes = [];
    this.petOwnerDetails = [];
    this.ApiCalled = false;
    this.patientId = "";
    this.notePattern = `[A-Za-z0-9.,'"?/ ]`;
    this.selectedBreed = null;
    this.isOrderFormSubmitted = false;
    this.matcher = new MyErrorStateMatcher2();
    this.labelService.getCreateOrderScreenLabels();
    this.label = this.labelService.createOrderScreen;
    this.isViewDOSPrice = this.dataService.appData.authDetails["IsViewDOSPrice"];
    this.dataService.page.subscribe((data) => {
      if (data["filterDatafor"]) {
        this.filterDatafor = data["filterDatafor"];
        this.selectedArray = data["selectedArray"];
      }
    });
  }
  ngOnInit() {
    this.ownerDetailsForm = this.createFormGroup(new OwnerModel());
    this.p_id = this.route.snapshot.queryParamMap.get("id");
    if (this.p_id) {
      this.patientId = this.p_id;
      this.ApiCalled = true;
    }
    this.getPatientOwnerDDLList();
    this.initForm();
    this.getUserSetting();
    this.GetOrderDDLList();
    this.setDefault();
  }
  ngOnDestroy() {
    this.dataService.pageState["filterDatafor"] = [];
    this.dataService.pageState["filteredArray"] = [];
    this.dataService.pageState["selectedArray"] = [];
    this.dataService.page.next(this.dataService.pageState);
  }
  openPanelTestListModal(editableTest) {
    const modalRef = this.modalService.open(PanelTestListModalComponent, {
      size: "xl",
      scrollable: true,
      backdrop: "static"
    });
    modalRef.result.then((result) => {
      console.log(result);
    });
    modalRef.componentInstance.headerText = "Select Tests";
    modalRef.componentInstance.ownerpopupTitle = "Select Tests";
    modalRef.componentInstance.selectedArray = this.selectedArray;
    modalRef.componentInstance.prevSelectedArray = JSON.parse(JSON.stringify(this.selectedArray));
    modalRef.componentInstance.editableTest = editableTest;
  }
  getUserSetting() {
    this.userService.getUserSettingDetails(this.headerService.loginUserGuid, localStorage.businessGuid).subscribe((data) => {
      this.selectedRefID = data.ResponseData;
    });
  }
  cancelOwnerDetails() {
    this.ownerDetailsForm.reset();
    this.modalService.dismissAll();
  }
  itemDisplayFn(item) {
    let str = "";
    if (item.OwnerName != void 0) {
      if (item.PatientId)
        str += item.PatientId + ", ";
      if (item.PatientFirstName)
        str += item.PatientFirstName;
      if (item.PatientLastName)
        str += " " + item.PatientLastName;
      if (item.OwnerName)
        str += ", " + item.OwnerName;
      if (item.Species)
        str += ", " + item.Species;
      if (item.Breed)
        str += ", " + item.Breed;
      if (item.Gender)
        str += ", " + item.Gender;
      if (item.Age)
        str += ", " + item.Age;
      if (item.LastResultDate)
        str += ", " + item.LastResultDate;
    }
    return str;
  }
  initForm() {
    this.petForm = this.fb.group({
      selOwner: ["", [this.forbiddenNameValidator()]],
      Doctorid: ["", Validators.required]
    });
    this.petForm.get("selOwner").valueChanges.pipe(debounceTime(1e3)).subscribe((response) => {
      this.selPatient = response;
      if (typeof response == "string") {
        this.filterData(response);
      }
    });
  }
  forbiddenNameValidator() {
    return (control) => {
      return control.value && typeof control.value == "object" ? null : { "noSelection": { value: control.value } };
    };
  }
  filterData(enteredData) {
    this.filteredOptions = [];
    const length = Object.keys(enteredData).length;
    if (length >= 3) {
      this.getPatientOwnerDDLList(enteredData);
    }
  }
  searchPetDetails(search) {
    const length = Object.keys(search).length;
    if (length == 1 || length == 2) {
      this.getPatientOwnerDDLList(search);
    }
  }
  // somethingChanged(checked) {
  // console.log(checked, 'chekFinal');
  // }
  /**
   * Use for Future Vaildation Require
   * Validators.pattern("^[A-Za-z0-9.,'?/][A-Za-z0-9.,'?/ ]{0,50}")
   * Not Allow Whitespace First and Last Charc -> Validators.pattern(/^(?:.*)?$/)
   * Validators.pattern(/^\S(?:.*\S)?$/)
   */
  createFormGroup(dataItem) {
    return this.fb.group({
      BusinessGuid: localStorage.businessGuid,
      OwnerLastName: [
        dataItem.OwnerLastName,
        Validators.pattern(/^(?:.*)?$/)
      ],
      OwnerFirstName: [
        dataItem.OwnerFirstName,
        Validators.pattern(/^(?:.*)?$/)
      ],
      PatientFirstName: [
        dataItem.PatientFirstName,
        Validators.compose([
          Validators.maxLength(50),
          Validators.pattern(/^(?:.*)?$/)
        ])
      ],
      PatientLastName: [
        dataItem.PatientLastName,
        Validators.compose([
          Validators.maxLength(50),
          Validators.pattern(/^(?:.*)?$/)
        ])
      ],
      GenderId: [dataItem.GenderId, Validators.maxLength(50)],
      DOB: [dataItem.DOB, Validators.required],
      SpeciesId: [dataItem.SpeciesId, Validators.required],
      // BreedId: [dataItem.BreedId, Validators.compose([Validators.required, Validators.pattern("^[A-Za-z0-9.,'?/][A-Za-z0-9-.,'?/ ]{0,50}")])],
      BreedId: [dataItem.BreedId, Validators.compose([Validators.required])],
      PatientId: [dataItem.PatientId, Validators.maxLength(50)],
      pmspatientId: [
        dataItem.PMSPatientId,
        Validators.pattern("^[a-zA-Z0-9 -]+$")
      ]
    });
  }
  OwnerDetails(targetModal) {
    this.ownerpopupTitle = "Pet & Owner Details";
    this.ownerDetailsForm.patchValue({ PatientId: this.patientId });
    this.modalService.open(targetModal, {
      windowClass: "my-Owner",
      backdrop: "static",
      keyboard: false
    });
  }
  AddTest(TestModal) {
    this.ownerpopupTitle = "Select Tests";
    this.section = "testSelection";
    this.filteredArray = this.selectedArray;
    this.modalService.open(TestModal, {
      windowClass: "my-Test",
      backdrop: "static",
      keyboard: false
    });
  }
  /**  note icon for edit */
  additionalNotes(AddNotes, test) {
    this.selectedNotesData = test;
    this.selectedArray.map((item) => {
      if (item.TestId == test.TestId) {
        this.UpdatedNotes = test.selfNote;
      }
    });
    this.ownerpopupTitle = test.TestName + " Add Source";
    this.modalService.open(AddNotes, {
      windowClass: "my-Note",
      backdrop: "static",
      keyboard: false
    });
  }
  // public clearSearchField() {
  //   this.searchText = "";
  //   this.filterDatafor = this.OrderTestData.map((a) => ({ ...a }));
  //   if (this.selectedArray.length) {
  //     this.selectedArray.forEach((x) => {
  //       this.selectedArray.forEach((x) => {
  //         const item = this.filterDatafor.find(
  //           (y) => y.OrderCode == x.OrderCode
  //         );
  //         if (item) {
  //           item.isChecked = true;
  //           item.selfNote = x.selfNote;
  //         }
  //       });
  //     });
  //   }
  // }
  get f() {
    return this.ownerDetailsForm.controls, this.petForm.controls;
  }
  addOwnerDetails() {
    this.ownerDetailsForm.patchValue({
      OwnerLastName: this.ownerDetailsForm.get("OwnerLastName").value?.trim(),
      OwnerFirstName: this.ownerDetailsForm.controls["OwnerFirstName"].value?.trim(),
      PatientFirstName: this.ownerDetailsForm.get("PatientFirstName").value?.trim(),
      PatientLastName: this.ownerDetailsForm.controls["PatientLastName"].value?.trim(),
      BreedId: this.ownerDetailsForm.controls["BreedId"].value?.trim(),
      pmspatientId: this.ownerDetailsForm.controls["pmspatientId"].value?.trim() ? this.ownerDetailsForm.controls["pmspatientId"].value?.trim() : null
    });
    if (!this.ownerDetailsForm.valid) {
      for (const i in this.ownerDetailsForm.controls)
        this.ownerDetailsForm.controls[i].markAsTouched();
      const msg = "Please enter all required fields";
      this.confirmationDialogService.confirm("", msg, "OK", "Cancel", "sm", true, false).then(() => {
      });
      return;
    } else {
      if (this.ownerDetailsForm.get("BusinessGuid").value == null) {
        this.ownerDetailsForm.patchValue({
          BusinessGuid: localStorage.businessGuid
        });
      }
      const req = __spreadValues(__spreadValues({}, this.ownerDetailsForm.value), { UserGuid: this.dataService.appData.authDetails["UserGuid"] });
      this.refLabService.addPatientDetail(req).subscribe((data) => {
        if (data.StatusCode == 302) {
          this.ownerDetailsForm.patchValue({ pmspatientId: null });
          this.confirmationDialogService.confirm("", "PIMS Patient ID already exist!", "OK", "Cancel", "sm", true, false);
          return;
        }
        this.new_patient_id = data.ResponseData;
        this.filterId = this.ownerDetailsForm.get("PatientId").value;
        this.getPatientOwnerDDLList(data.ResponseData);
        this.modalService.dismissAll();
        this.ownerDetailsForm.reset();
        this.ApiCalled = true;
      }, (err) => {
        console.log(JSON.stringify(err));
      });
    }
  }
  GetOrderDDLList() {
    const langId = EnmLanguage.English;
    this.refLabService.getOrderFilterDDLList(localStorage.businessGuid, langId).subscribe((data) => {
      this.DoctorList = data.ResponseData.DoctorList;
      this.genderData = data.ResponseData.GenderList;
      this.SpeciesList = data.ResponseData.SpeciesList;
    });
  }
  getFilterDDLDetails() {
    const langId = EnmLanguage.English;
    this.commonService.getFilterDDLDetails(langId).subscribe((data) => {
      this.genderData = data.ResponseData.GenderList;
      this.SpeciesList = data.ResponseData.SpeciesList;
    });
  }
  // public getDosfilter() {
  //   this.commonService.GetDOSFilterdetails().subscribe((data) => {
  //     this.filterClassData = data.ResponseData.Class;
  //     this.filterMenuData = data.ResponseData.Menu;
  //   });
  // }
  // public getorderTest() {
  //
  //   let Test = {
  //     SearchText:
  //       (this.SearchTestName !== "Search by Test Name" && this.searchText) ||
  //       "",
  //     SearchTestName:
  //       (this.SearchTestName === "Search by Test Name" && this.searchText) ||
  //       "",
  //     ClassName: this.SelectedClass,
  //     Menu: this.selectedMenu,
  //     IsOrder: true,
  //     UserGuid: this.headerService.loginUserGuid,
  //     IsFavourite: this.SelectedFav,
  //   };
  //   this.refLabService.getOrderTestList(Test).subscribe((data) => {
  //     this.OrderTestData = data.ResponseData.TestDetail;
  //     this.filterDatafor = this.OrderTestData;
  //     if (this.filteredArray.length) {
  //       this.filteredArray.forEach((x) => {
  //         const item = this.filterDatafor.find(
  //           (y) => y.OrderCode == x.OrderCode
  //         );
  //         if (item) {
  //           item.isChecked = true;
  //           item.selfNote = x.selfNote;
  //         }
  //       });
  //     }
  //   });
  // }
  // public updateFilterArray(event, order) {
  //   if (event.checked) {
  //     this.filteredArray.push(order);
  //   } else {
  //     const idx = this.filteredArray.findIndex((x) => x.TestId == order.TestId);
  //     this.filteredArray.splice(idx, 1);
  //   }
  //   let nextBtn = document.getElementById("nextBtn");
  //   if (nextBtn) {
  //     nextBtn.focus();
  //   }
  // }
  // public SelectedAddtest() {
  //   //this.filteredArray = this.filterDatafor.filter(item => item.isChecked == true);
  //   const filteredArray = this.filteredArray.filter((x) => {
  //     if (this.refLabService.moreInfoReqFor.indexOf(x.OrderCode) !== -1) {
  //       x.noteRequired = true;
  //       return true;
  //     }
  //   });
  //   if (this.filteredArray.length) {
  //     if (this.section == "testSelection" && filteredArray.length) {
  //       this.section = "moreInfo";
  //       this.ownerpopupTitle = "More information required";
  //       // this.toggleBtn();
  //       return;
  //     }
  //     this.selectedArray = this.filteredArray;
  //     this.searchText = "";
  //     this.selectedMenu = "";
  //     this.SelectedClass = "";
  //     this.SelectedFav = false;
  //     this.modalService.dismissAll();
  //   }
  // }
  /**
   * back
   */
  // public back() {
  //   this.section = "testSelection";
  //   this.ownerpopupTitle = "Select Tests";
  // }
  // public resetBack() {
  //   this.section = "testSelection";
  //   this.ownerpopupTitle = "Select Tests";
  //   this.searchText = "";
  //   this.selectedMenu = "";
  //   this.SelectedClass = "";
  //   this.SelectedFav = false;
  //   this.modalService.dismissAll();
  // }
  /**
   * toggleBtn
   */
  // public toggleBtn(val: any = null, item: any = null) {
  //   if (item) item.selfNote = val;
  //   const reqItems = this.filteredArray.filter((x) => {
  //     if (x.noteRequired) {
  //       return !x.selfNote;
  //     }
  //   });
  //   this.disabledBtn = reqItems.length > 0;
  // }
  setClickedRow(test, i) {
    this.selectedRow = i;
  }
  change(test) {
    test.selfNote = this.UpdatedNotes;
  }
  notesUpdate() {
    this.selectedArray.map((item) => {
      if (item.TestId == this.selectedNotesData.TestId) {
        this.UpdatedNotes = this.checkScriptTag(this.UpdatedNotes);
        item.selfNote = this.UpdatedNotes;
        return item;
      }
    });
    this.modalService.dismissAll();
  }
  CancelNotes(test) {
    this.filterDatafor.forEach((item) => {
      if (item.TestId == test.TestId) {
        item.isChecked = false;
      }
    });
    const idx = this.selectedArray.findIndex((x) => x.TestId == test.TestId);
    this.selectedArray.splice(idx, 1);
    debugger;
    this.dataService.pageState["filterDatafor"] = this.filterDatafor;
    this.dataService.page.next(this.dataService.pageState);
  }
  getPatientOwnerDDLList(searchStr) {
    let searchStrArr, findStr;
    if (searchStr) {
      searchStrArr = searchStr.split(",");
      searchStr = searchStrArr[0];
      findStr = searchStrArr[1];
    }
    const params = {
      BusinessGuid: localStorage.businessGuid,
      Filter: searchStr ? searchStr : this.patientId
    };
    this.refLabService.PatientOwnerDDLList(params).subscribe((data) => {
      this.patientId = data.ResponseData.PatientId;
      this.patientOwnerList = params.Filter == this.p_id ? data.ResponseData.PatientOwner.filter((el) => {
        if (el.PatientId == this.p_id)
          return el;
      }) : data.ResponseData.PatientOwner;
      this.filteredOptions = params.Filter == this.p_id ? data.ResponseData.PatientOwner.filter((el) => {
        if (el.PatientId == this.p_id)
          return el;
      }) : data.ResponseData.PatientOwner;
      if (this.ApiCalled == true) {
        let patientIdx = -1;
        if (findStr) {
          patientIdx = this.patientOwnerList.findIndex((x) => x.ZDXPatientId == findStr);
        }
        const [lastItem] = findStr ? this.patientOwnerList.splice(patientIdx, 1) : this.patientOwnerList.slice(-1);
        this.petOwnerDetails = lastItem;
        this.petOwnerDet = this.petOwnerDetails;
        this.ownerdetails = this.petOwnerDet.OwnerName;
        this.petForm.get("selOwner").setValue(this.petOwnerDetails);
        this.itemDisplayFn(this.itemDisplayFn);
        this.ApiCalled = false;
      }
    }, (err) => {
      console.log(JSON.stringify(err));
    });
  }
  downloadMainfest() {
    this.refLabService.downloadableMainfest(this.addorderDetailRes.ResponseData, this.dataService.appData.authDetails["BusinessGuid"]).subscribe((res) => {
      const blob = new Blob([res], { type: "application/pdf" });
      const objectURL = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = objectURL;
      a.target = "_blank";
      a.click();
    }, (err) => {
      console.log(JSON.stringify(err));
    });
  }
  checkScriptTag(str) {
    if (str) {
      const rgx = /[^A-Za-z0-9.,'"?/ ]/gi;
      str = str.replace(rgx, "").replace(/ +/g, " ");
    }
    return str;
  }
  AddOrderDetails(cmtNotes) {
    if (cmtNotes) {
      cmtNotes = this.checkScriptTag(cmtNotes);
      this.TypeNotes = cmtNotes;
    }
    this.petForm.patchValue({
      Doctorid: this.selectedRefID.SelectedRefLabProviderId
    });
    this.isOrderFormSubmitted = true;
    this.matcher = new MyErrorStateMatcher2(true);
    if (this.petForm.controls.selOwner.invalid) {
      this.petForm.controls.selOwner.setValue("");
      return;
    }
    if (!this.petForm.valid || !this.selPatient || typeof this.selPatient === "string") {
      return;
    }
    this.finalArray = [];
    this.selectedArray.forEach((o) => {
      if (o.selectedQA && !this.finalArray.find((x) => x.Code === o.selectedQA.Code)) {
        this.finalArray.push(o.selectedQA);
      } else {
        if (!this.finalArray.find((x) => x.Code === o.OrderCode)) {
          this.finalArray.push({ Code: o.OrderCode });
        }
      }
    });
    this.finaPatientArray = {
      patientId: this.selPatient.ZDXPatientId,
      OwnerFirstName: this.selPatient.OwnerFirstName,
      OwnerLastName: this.selPatient.OwnerLastName,
      firstname: this.selPatient.PatientFirstName,
      lastname: this.selPatient.PatientLastName,
      gender: this.selPatient.Gender,
      birthday: this.selPatient.DOB,
      species: this.selPatient.Species,
      breed: this.selPatient.Breed
    };
    const obj = {
      DoctorId: this.selectedRefID.SelectedRefLabProviderId,
      BusinessGuid: this.dataService.appData.authDetails["BusinessGuid"],
      Patient: this.finaPatientArray,
      Tests: this.finalArray,
      Notes: cmtNotes
    };
    if (this.finalArray.length && this.selPatient != "") {
      this.refLabService.addOrderDetail(obj).subscribe((data) => {
        this.addorderDetailRes = data;
        if (data.StatusCode == "200") {
          this.confirmationDialogService.confirm("", `Order ${this.addorderDetailRes.ResponseData} has been submitted successfully. Please use the button below to print the Requisition Form for inclusion with order specimens.`, "View Requisition Form", "Cancel", "lg", true, true).then((confirmed) => {
            if (confirmed) {
              this.downloadMainfest();
            }
            if (this.p_id) {
              this.commonService.goBack();
            } else {
              this.router.navigate(["/refLab/orders"], {
                queryParams: { refresh: true }
              });
            }
            this.headerService.getNotification(this.labelService.selectedLanguage, true);
          });
        } else {
          const respErrorMessage = "Connection error. Try again later. If issue persists, please contact Reference Lab Customer Service at 888-965-9652 or referencelabsupport@zoetis.com.";
          this.confirmationDialogService.confirm("", respErrorMessage, "Dismiss", this.labelService.dsUserProfileScreen.Cancel, "sm", true, false).then(() => {
          }).catch(() => {
          });
        }
      }, (err) => {
        console.log(JSON.stringify(err));
      });
    } else {
      return this.petForm.invalid;
    }
  }
  // onSelect(selectedItem: any) {
  //   // this.filterDatafor.map(data => {
  //   //   if (data.TestId == selectedItem.TestId) {
  //   //     if (data.isChecked) {
  //   //       data.isChecked = true;
  //   //     }
  //   //     else {
  //   //       data.isChecked = false;
  //   //     }
  //   //     return data
  //   //   }
  //   // })
  //   selectedItem.isChecked = !!selectedItem.isChecked;
  // }
  onSpeciesChange(event) {
    this.getBreedList(event.target.value);
  }
  getBreedList(speciesId) {
    if (!speciesId) {
      this.breedList = [];
      return;
    }
    const langId = EnmLanguage.English;
    this.refLabService.getBreedListBySpeciesId(speciesId, langId).subscribe((res) => {
      this.ownerDetailsForm.patchValue({ BreedId: "" });
      this.breedList = res.ResponseData;
      console.log(this.breedList);
    }, (err) => {
      console.log(JSON.stringify(err));
      this.commonService.showCommonToastrError();
    });
  }
  // applyFilter(selected: string, selectedclass) {
  // let filterData = [];
  // this.filterDatafor = this.OrderTestData.filter(item => {
  //   if (item.TestName.toString().toLowerCase().indexOf(selected.toLowerCase()) !== -1) {
  //     return true;
  //   } else if (item.OrderCode.toString().toLowerCase().indexOf(selected.toLowerCase()) !== -1) {
  //     return true;
  //   }
  //   else if (item.Component.toString().toLowerCase().indexOf(selected.toLowerCase()) !== -1) {
  //     return true;
  //   }
  //   return false;
  // });
  // }
  onTypeChange() {
    if (this.searchText != null && this.searchText[this.searchText.length - 1] != " ") {
    }
  }
  onChange(Menu) {
    this.menuSelected = Menu;
    if (this.selectedfav != false && this.classSelected != "" && this.menuSelected != "") {
      this.filterDatafor = this.OrderTestData.filter((x) => x.IsFavourite && x.Class == this.classSelected && x.Menu == this.menuSelected);
    } else {
      if (this.classSelected != "" && this.menuSelected != "") {
        this.filterDatafor = this.OrderTestData.filter((x) => x.Class == this.classSelected && x.Menu == this.menuSelected);
      } else {
        if (this.selectedfav != false && this.menuSelected != "") {
          this.filterDatafor = this.OrderTestData.filter((x) => x.IsFavourite && x.Menu == this.menuSelected);
        } else {
          if (this.menuSelected != "") {
            this.filterDatafor = this.OrderTestData.filter((x) => x.Menu.toLowerCase() == Menu.toLowerCase());
          }
        }
      }
    }
  }
  onChangeClass(cls) {
    this.classSelected = cls;
    if (this.selectedfav != false && this.menuSelected != "" && this.classSelected != "") {
      this.filterDatafor = this.OrderTestData.filter((x) => x.IsFavourite && x.Menu == this.menuSelected && x.Class == this.classSelected);
    } else {
      if (this.menuSelected != "" && this.classSelected != "") {
        this.filterDatafor = this.OrderTestData.filter((x) => x.Menu == this.menuSelected && x.Class == cls);
      } else {
        if (this.selectedfav != false && this.classSelected != "") {
          this.filterDatafor = this.OrderTestData.filter((x) => x.IsFavourite && x.Class == this.classSelected);
        } else {
          if (this.classSelected != "") {
            this.filterDatafor = this.OrderTestData.filter((x) => x.Class.toLowerCase() == cls.toLowerCase());
          }
        }
      }
    }
  }
  onChangeFav(fav) {
    this.selectedfav = fav;
    if (this.menuSelected != "" && this.classSelected != "" && this.selectedfav != false) {
      this.filterDatafor = this.OrderTestData.filter((x) => x.Menu == this.menuSelected && x.Class == this.classSelected && x.IsFavourite);
    } else {
      if (this.classSelected != "" && fav != false) {
        this.filterDatafor = this.OrderTestData.filter((x) => x.Class == this.classSelected && x.IsFavourite);
      } else {
        if (this.selectedfav == true) {
          this.filterDatafor = this.OrderTestData.filter((x) => x.IsFavourite);
        }
      }
    }
  }
  dataFetch() {
    this.ownerDetailsForm.get("PatientLastName").setValue(this.ownerDetailsForm.get("OwnerLastName").value);
  }
  // public clearAll() {
  //   this.searchText = "";
  //   this.selectedMenu = "";
  //   this.SelectedClass = "";
  //   this.menuSelected = "";
  //   this.SelectedFav = false;
  //   this.filterDatafor = this.OrderTestData.map((a) => ({ ...a }));
  //   this.filterDatafor.map((data) => {
  //     data.isChecked = false;
  //   });
  //   this.setDefault();
  //   // this.getorderTest();
  // }
  ownerpetDdlDetails(item) {
    let ownerpetvalue = "";
    if (item.PatientId) {
      ownerpetvalue += item.PatientId + ", ";
    }
    if (item.PatientName) {
      ownerpetvalue += item.PatientName + ", ";
    }
    if (item.OwnerName) {
      ownerpetvalue += item.OwnerName + ", ";
    }
    if (item.Species) {
      ownerpetvalue += item.Species + ", ";
    }
    if (item.Breed) {
      ownerpetvalue += item.Breed + ", ";
    }
    if (item.Gender) {
      ownerpetvalue += item.Gender + ", ";
    }
    if (item.Age) {
      ownerpetvalue += item.Age + ", ";
    }
    if (item.LastResultDate) {
      ownerpetvalue += item.LastResultDate + ", ";
    }
    ownerpetvalue = ownerpetvalue.trim();
    if (ownerpetvalue != "") {
      return ownerpetvalue.substring(0, ownerpetvalue.length - 1);
    } else {
      return "";
    }
  }
  setDefault() {
    this.menuSelected = "";
    this.classSelected = "";
    this.selectedfav = "";
  }
  nav_Back() {
    if (this.p_id) {
      this.commonService.goBack();
    } else {
      this.router.navigate(["/refLab/orders"]);
    }
  }
  static {
    this.\u0275fac = function CreateOrdersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CreateOrdersComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(RefLabService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(LabelService), \u0275\u0275directiveInject(HeaderService), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(ConfirmationDialogService), \u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateOrdersComponent, selectors: [["app-create-orders"]], features: [\u0275\u0275ProvidersFeature([DatePipe])], decls: 75, vars: 29, consts: [["auto", "matAutocomplete"], ["petModal", ""], ["TestModal", ""], ["AddNotes", ""], ["pickerFrom", ""], ["hasBackdrop", "true", "id", "full_page_temp", 1, "example-container1"], [1, "example-sidenav-content", "w-100", "sidefilter", "dashboard"], [1, "left-block1"], [1, "p-0"], [1, "mt-0"], [1, "mt-2", "mb-2", "d-flex", "justify-content-between", "align-items-center", "w-100"], [1, "d-flex", "justify-content-between", "align-items-center", "w-100", "toprow"], [1, "d-flex", "justify-content-between", "head1", "align-items-center", "text-center", "w-100"], [1, "text-center", "mt-4", "mb-4", "w-100"], [1, "d-flex", "justify-content-between", "pl-3", "pb-3", "align-items-center", "toprow"], [1, "head1", "d-flex", "justify-content-between", "align-items-center", "w-100"], [1, "d-flex", "justify-content-between", "align-items-center", "w-100", 2, "margin-top", "-78px"], [1, "backlink", 3, "click"], [1, "d-flex", "flex-wrap"], [1, "col", "d-flex", "flex-column", "colpart"], [1, "w-100", 3, "formGroup"], ["appearance", "outline", "floatLabel", "always", "class", "w-90", 4, "ngIf"], ["class", "orderErr", 4, "ngIf"], [1, "col", "d-flex", "flex-column"], [1, "d-flex", "justify-content-between", "align-items-start"], [1, "w-100", "mr-3", 3, "formGroup"], ["appearance", "outline", "floatLabel", "always", 1, "w-100"], ["type", "text", "matInput", "", "formControlName", "selOwner", 1, "max-reach", 3, "keyup.enter", "matAutocomplete", "placeholder", "errorStateMatcher"], [1, "matpoint", 3, "displayWith"], [1, "frow"], [1, "d-flex", "flex-column", "option_outer", "pl-3", "pt-3", "frstTxt"], [1, "liner"], [3, "value", 4, "ngFor", "ngForOf"], [1, "placeh"], ["class", "blankTxt alert", 4, "ngIf"], [1, "pt-1", "pimg"], ["type", "button", "mat-stroked-button", "", 1, "add-patient", 3, "click"], [1, "col", "my-3", "mt-4", "d-flex", "align-items-center"], ["src", "../../../assets/img/add-button.png ", "alt", "", 3, "click"], [1, "d-flex", "justify-content-start", "pl-3", "flex-wrap", "addpanel"], ["class", "mr-3 test_text mb-3", 4, "ngFor", "ngForOf"], [1, "d-flex", "col-sm-12", "mt-3"], [1, "col", "p-0", "pl-1"], [1, "d-flex", "align-items-top", "nobtm-pad", "flex-column"], ["for", "", 1, "mb-0"], ["appearance", "outline", "floatLabel", "always"], ["matInput", "", "maxlength", "500", "rows", "10", 3, "ngModelChange", "ngModel", "placeholder"], [1, "modal-footer", "row", "mt-5", "justify-content-center"], ["type", "button", "mat-raised-button", "", "color", "primary", 1, "cancel-btn", "mr-2", 3, "click"], ["type", "button", "mat-raised-button", "", "color", "accent", 1, "save-change", "mr-2", 3, "click"], ["backdrop", "static"], ["appearance", "outline", "floatLabel", "always", 1, "w-90"], ["formControlName", "Doctorid", "required", "", 3, "ngModelChange", "placeholder", "ngModel", "errorStateMatcher"], ["class", "formselect", 3, "value", 4, "ngFor", "ngForOf"], [1, "formselect", 3, "value"], [1, "orderErr"], [3, "value"], [1, "d-flex", "flex-column", "option_outer"], [1, "Rtxt"], [1, "blankTxt", "alert"], ["class", "errtxt", 4, "ngIf"], [1, "errtxt"], [1, "mr-3", "test_text", "mb-3"], ["href", "javascript:void(0)", 1, "docIcon", 3, "click"], ["class", "material-icons-outlined", "style", "color: #007bff;", 4, "ngIf"], ["src", "../../../assets/img/cancel@2x.png", "alt", "", "width", "11", 3, "click"], [1, "material-icons-outlined", 2, "color", "#007bff"], [1, "modal-header", "text-center"], ["id", "modal-basic-title", 1, "modal-title", "w-100"], [1, "modal-body"], [1, "touchedValidation", 3, "formGroup"], [1, "col", "mcol"], ["for", ""], [1, "d-flex"], ["type", "text", "matInput", "", "autocomplete", "off", "formControlName", "OwnerLastName", "maxlength", "50", "required", "", 3, "blur", "placeholder"], ["type", "text", "matInput", "", "formControlName", "OwnerFirstName", "maxlength", "50", "required", "", 3, "placeholder"], ["type", "text", "matInput", "", "autocomplete", "off", "formControlName", "PatientFirstName", "maxlength", "50", "required", "", 3, "placeholder"], ["type", "text", "matInput", "", "autocomplete", "off", "formControlName", "PatientLastName", "maxlength", "50", "required", "", 3, "placeholder"], ["required", "", "formControlName", "GenderId", "placeholder", "Select Breed", 1, "custom-select"], ["selected", "", "disabled", "", "hidden", "", "value", "null"], [1, "col", "mcol", "bday"], ["matInput", "", "formControlName", "DOB", "readonly", "", 3, "focus", "max", "matDatepicker"], ["matSuffix", "", 3, "for"], [1, "form-group"], ["required", "", "formControlName", "SpeciesId", 1, "form-control", "custom-select", 3, "change", "placeholder"], [4, "ngIf"], ["appearance", "outline", "floatLabel", "always", 4, "ngIf"], ["type", "text", "matInput", "", "autocomplete", "off", "formControlName", "pmspatientId", "maxlength", "20", 3, "placeholder"], ["required", "", "formControlName", "BreedId", 1, "custom-select"], ["type", "text", "matInput", "", "autocomplete", "off", "formControlName", "BreedId", "maxlength", "50", "required", "", 3, "placeholder"], ["class", "modal-body filter_wrapper", 4, "ngIf"], ["class", "modal-body filter_wrapper", "style", "padding: 4rem;", 4, "ngIf"], ["class", "modal-footer row mt-3 pt-0 justify-content-center", 4, "ngIf"], [1, "modal-body", "filter_wrapper"], [1, "d-flex", "justify-content-start", "flex-wrap", "align-items-center", "mb-3"], ["id", "filer_by_menu", 1, "asrch", 2, "width", "20%"], ["appearance", "outline", "floatLabel", "always", 1, "dotpart", "w-100"], [3, "ngModelChange", "ngModel"], ["value", "Search by Test Name", 3, "ngClass"], ["value", "Search all fields", 3, "ngClass"], [1, "asrch", 2, "width", "25%"], ["matInput", "", "maxlength", "60", "autocomplete", "off", 3, "ngModelChange", "keydown.enter", "ngModel", "placeholder"], ["matPrefix", ""], ["src", "../../../../assets/img/search-icon.png", "alt", "search-icon"], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [1, "asrch", 2, "width", "35%"], [1, "float-right", "pull-right"], ["appearance", "outline", "floatLabel", "always", 1, "float-left", "w-60"], [3, "ngModelChange", "placeholder", "ngModel"], [1, "float-left", "w-40", "mt-2", "pl-2"], ["value", "checked", 1, "example-margin", 3, "ngModelChange", "ngModel"], [1, "asearch", 2, "width", "20%"], [1, "del_doc", "col1", "float-right"], [1, "clrall", "mr-2", 3, "click"], ["ngbAutofocus", "", "mat-raised-button", "", 1, "w-70", "g-btn", 2, "order", "2", 3, "click"], [1, "d-flex", "flex-wrap", "chkbox_wrapper"], [1, "d-flex", "align-content-start", "flex-wrap", "w-100"], ["class", "w-50   del_doc del_doc1  pr-4", 3, "click", 4, "ngFor", "ngForOf"], ["class", "w-100 text-center", 4, "ngIf"], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", "aria-label", "Clear", 3, "click"], [1, "w-50", "del_doc", "del_doc1", "pr-4", 3, "click"], [1, "mb-3", "d-flex", "align-items-center", "justify-content-between", "w-100"], [1, "example-margin", "d-flex", "align-items-center", 3, "change", "ngModelChange", "ngModel"], [3, "ngClass"], [1, "chk_label"], [1, "tooltip"], ["src", "../../../assets/img/info@2x.png", "alt", "", "width", "15"], [1, "tooltiptext"], [1, "tool_text", "p-3"], [4, "ngFor", "ngForOf"], [1, "w-100", "text-center"], [1, "modal-body", "filter_wrapper", 2, "padding", "4rem"], [1, "d-flex", "justify-content-between", "flex-wrap", "align-items-center", "mb-3"], ["class", "row col-12 d-flex align-items-center mb-3", 4, "ngIf"], [1, "row", "col-12", "d-flex", "align-items-center", "mb-3"], [1, "col-3", "text-bold", "pt-2"], [1, "col-9"], [1, "pb-2"], [1, "w-100"], ["type", "text", "maxlength", "50", "matInput", "", "placeholder", "Enter Source", "autocomplete", "off", 3, "ngModelChange", "ngModel"], [1, "modal-footer", "row", "mt-3", "pt-0", "justify-content-center"], ["type", "button", "id", "nextBtn", "mat-raised-button", "", "color", "accent", 1, "save-change", "mr-2", 3, "click", "keydown.enter"], ["type", "button", "mat-raised-button", "", "color", "accent", 1, "save-change", "mr-2", 3, "click", "disabled"], [1, "d-flex", "flex-column", "align-items-top", "nobtm-pad"], ["matInput", "", "maxlength", "50", 3, "ngModelChange", "ngModel"], ["ngbAutofocus", "", "type", "button", "mat-raised-button", "", "color", "accent", 1, "save-change", "mr-2", 3, "click"]], template: function CreateOrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "mat-drawer-container", 5)(1, "div", 6)(2, "div", 7)(3, "mat-card", 8)(4, "div", 9)(5, "div", 10)(6, "div", 11)(7, "span", 12)(8, "h5", 13);
        \u0275\u0275text(9, "Create a New Reference Lab Order");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 14)(11, "div", 15)(12, "span", 16)(13, "a", 17);
        \u0275\u0275listener("click", function CreateOrdersComponent_Template_a_click_13_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.commonService.goBack());
        });
        \u0275\u0275text(14, "Back");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(15, "div", 18)(16, "div", 19)(17, "form", 20)(18, "label");
        \u0275\u0275text(19);
        \u0275\u0275elementStart(20, "sup");
        \u0275\u0275text(21, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(22, CreateOrdersComponent_mat_form_field_22_Template, 3, 4, "mat-form-field", 21)(23, CreateOrdersComponent_mat_error_23_Template, 2, 0, "mat-error", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 23)(25, "label");
        \u0275\u0275text(26);
        \u0275\u0275elementStart(27, "sup");
        \u0275\u0275text(28, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 24)(30, "form", 25)(31, "mat-form-field", 26)(32, "input", 27);
        \u0275\u0275listener("keyup.enter", function CreateOrdersComponent_Template_input_keyup_enter_32_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.searchPetDetails($event.target.value));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "mat-autocomplete", 28, 0)(35, "div", 29)(36, "span", 30);
        \u0275\u0275text(37, "Patient ID, Patient Name, Owner Name, Species, Breed, Sex, Age, Last Result");
        \u0275\u0275elementEnd();
        \u0275\u0275element(38, "hr", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275template(39, CreateOrdersComponent_mat_option_39_Template, 4, 2, "mat-option", 32);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(40, CreateOrdersComponent_mat_error_40_Template, 2, 0, "mat-error", 22);
        \u0275\u0275elementStart(41, "p")(42, "span", 33);
        \u0275\u0275text(43, "(Type in a minimum of 3 characters to initiate automated search)");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(44, CreateOrdersComponent_div_44_Template, 2, 1, "div", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "span", 35)(46, "button", 36);
        \u0275\u0275listener("click", function CreateOrdersComponent_Template_button_click_46_listener() {
          \u0275\u0275restoreView(_r1);
          const petModal_r6 = \u0275\u0275reference(70);
          return \u0275\u0275resetView(ctx.OwnerDetails(petModal_r6));
        });
        \u0275\u0275text(47, "Create a new patient");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(48, "div", 37)(49, "label");
        \u0275\u0275text(50);
        \u0275\u0275elementStart(51, "sup");
        \u0275\u0275text(52, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "img", 38);
        \u0275\u0275listener("click", function CreateOrdersComponent_Template_img_click_53_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openPanelTestListModal());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "div", 39);
        \u0275\u0275template(55, CreateOrdersComponent_mat_error_55_Template, 2, 0, "mat-error", 22)(56, CreateOrdersComponent_span_56_Template, 5, 2, "span", 40);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 41)(58, "div", 42)(59, "div", 43)(60, "label", 44);
        \u0275\u0275text(61, " Case History and Additional Case Information ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "mat-form-field", 45)(63, "textarea", 46);
        \u0275\u0275twoWayListener("ngModelChange", function CreateOrdersComponent_Template_textarea_ngModelChange_63_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.TypeNotes, $event) || (ctx.TypeNotes = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(64, "div", 47)(65, "button", 48);
        \u0275\u0275listener("click", function CreateOrdersComponent_Template_button_click_65_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.nav_Back());
        });
        \u0275\u0275text(66);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "button", 49);
        \u0275\u0275listener("click", function CreateOrdersComponent_Template_button_click_67_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.AddOrderDetails(ctx.TypeNotes));
        });
        \u0275\u0275text(68);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(69, CreateOrdersComponent_ng_template_69_Template, 101, 28, "ng-template", 50, 1, \u0275\u0275templateRefExtractor)(71, CreateOrdersComponent_ng_template_71_Template, 7, 5, "ng-template", 50, 2, \u0275\u0275templateRefExtractor)(73, CreateOrdersComponent_ng_template_73_Template, 15, 4, "ng-template", 50, 3, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        const auto_r26 = \u0275\u0275reference(34);
        \u0275\u0275advance(17);
        \u0275\u0275property("formGroup", ctx.petForm);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.isOrderFormSubmitted && ctx.petForm.controls.Doctorid.hasError("required") ? "mat-error" : "");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.label.DoctorID, "");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.selectedRefID);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isOrderFormSubmitted && ctx.petForm.controls.Doctorid.hasError("required"));
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.isOrderFormSubmitted && ctx.petForm.controls.selOwner.hasError("noSelection") ? "mat-error" : "");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.label.PetOwnerDetails, "");
        \u0275\u0275advance(4);
        \u0275\u0275property("formGroup", ctx.petForm);
        \u0275\u0275advance(2);
        \u0275\u0275property("matAutocomplete", auto_r26)("placeholder", ctx.label.SearchPetOwner)("errorStateMatcher", ctx.matcher);
        \u0275\u0275advance();
        \u0275\u0275property("displayWith", ctx.itemDisplayFn);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.filteredOptions);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isOrderFormSubmitted && ctx.petForm.controls.selOwner.hasError("noSelection"));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.petForm.controls["selOwner"].invalid && (ctx.petForm.controls["selOwner"].dirty || ctx.petForm.controls["selOwner"].touched));
        \u0275\u0275advance(5);
        \u0275\u0275classMapInterpolate1("mr-3 ", ctx.isOrderFormSubmitted && !ctx.selectedArray.length ? "mat-error" : "head1", "");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.label.Selectpanelstests, "");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.isOrderFormSubmitted && !ctx.selectedArray.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.selectedArray);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.TypeNotes);
        \u0275\u0275property("placeholder", ctx.label.TypeHere);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.label.Cancel, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.label.Submit, " ");
      }
    }, dependencies: [NgClass, NgForOf, NgIf, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MaxLengthValidator, NgModel, FormGroupDirective, FormControlName, MatLegacyError, MatLegacyFormField, MatLegacyPrefix, MatLegacySuffix, MatLegacyInput, MatLegacyButton, MatIcon, MatLegacyCheckbox, MatLegacyCard, MatLegacySelect, MatLegacyOption, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, MatDrawerContainer, MatLegacyAutocomplete, MatLegacyAutocompleteTrigger], styles: ['\n\n.example-container1[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  position: relative;\n  z-index: 0;\n}\n.save-change[_ngcontent-%COMP%] {\n  background-color: #ff6400;\n  color: #fff;\n  min-width: 125px;\n}\n.g-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fd6400;\n  border-color: #fd6400;\n}\n.add-patient[_ngcontent-%COMP%] {\n  color: #f65c00;\n  font-weight: 1000;\n  background-color: #fff;\n  border: 2px solid #f65c00;\n  min-width: 180px;\n  height: 32px !important;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  min-width: 125px;\n  border: 1px solid #b9babb;\n  background: #edebeb99 !important;\n  color: #747576 !important;\n}\n.dotdosskyBlue[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #2d68c4;\n}\n.dotdosGreen[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #31b44a;\n}\n.dotdosorange[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #fed504;\n}\n.dotdosequine[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #006271;\n}\n.dotdosBlue[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #a0dcee;\n}\n.dotdosallother[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #a884bb;\n}\n#full_page_temp[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  margin-bottom: 0px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.w-90[_ngcontent-%COMP%] {\n  width: 90%;\n}\n#full_page_temp[_ngcontent-%COMP%]   .filter_wrapper[_ngcontent-%COMP%]   .mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%] {\n  line-height: 17px;\n  font-size: 13px;\n  width: 90%;\n  word-break: break-word;\n  white-space: break-spaces;\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  width: 90% !important;\n}\n.chk_label[_ngcontent-%COMP%] {\n  line-height: 24px;\n  width: 90% !important;\n  word-break: break-word;\n  white-space: break-spaces !important;\n}\n.chkbox_wrapper[_ngcontent-%COMP%] {\n  height: calc(100vh - 350px);\n  overflow: auto;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 13px;\n  margin-bottom: 0px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-left: 15px;\n  margin-bottom: 20px;\n}\n.test_text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  border-radius: 6px;\n  padding: 5px 7px;\n  background: #eeeeeee8;\n}\n.text-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none !important;\n}\n.head1[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n.test_text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  bottom: 1px;\n}\n.tooltip[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  font-size: 13px;\n  opacity: 1;\n}\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 270px;\n  background-color: #fff;\n  color: #000;\n  border-radius: 6px;\n  padding: 0;\n  position: absolute;\n  z-index: 1;\n  top: 0px;\n  right: 128%;\n  box-shadow: 0 0 12px 0 rgb(0 0 0 / 19%) !important;\n}\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.tool_header[_ngcontent-%COMP%] {\n  background: #0072ce;\n  padding: 16px 0;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  color: #fff;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.tool_text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.norecord[_ngcontent-%COMP%] {\n  width: 99.1% !important;\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  border: 1px solid #ccc9;\n  border-top: transparent;\n  background-color: #fbfbfb;\n}\n  .my-Owner .modal-dialog {\n  max-width: 80% !important;\n  width: 80% !important;\n}\n  .my-Test .modal-dialog {\n  max-width: 100% !important;\n  width: 90% !important;\n}\n  .my-Note .modal-dialog {\n  max-width: 50% !important;\n  width: 50% !important;\n}\n.subtext[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n}\n.option_outer[_ngcontent-%COMP%] {\n  line-height: 16px;\n}\n.docIcon[_ngcontent-%COMP%] {\n  width: 35px;\n  display: inline-block;\n  position: relative;\n  top: 0px;\n  text-align: center;\n  color: #007bff;\n}\n  .docIcon .material-icons {\n  font-size: 17px !important;\n}\n  .docIcon .mat-icon {\n  height: 14px !important;\n  width: 14px !important;\n}\n.addpanel[_ngcontent-%COMP%] {\n  max-height: 116px;\n  overflow-y: scroll;\n  padding-top: 5px;\n}\n.blankTxt.alert[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.errtxt[_ngcontent-%COMP%] {\n  color: #9a9a9a;\n  font-style: italic;\n  font-weight: bold;\n}\n.frstTxt[_ngcontent-%COMP%] {\n  color: #9a9a9a;\n  font-size: 13px;\n  font-weight: bold;\n}\n.liner[_ngcontent-%COMP%] {\n  width: 97%;\n  height: 2px;\n  background-color: #f2e9e9;\n  margin-bottom: 0;\n}\n.Rtxt[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.placeh[_ngcontent-%COMP%] {\n  color: #9a9a9a;\n  font-style: italic;\n  font-size: 11px;\n}\n.matpoint[_ngcontent-%COMP%]   .mat-option[_ngcontent-%COMP%] {\n  display: table-caption;\n}\n.formselect.mat-option[_ngcontent-%COMP%] {\n  display: flex;\n}\n.max-reach[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 42rem;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n}\n.clrall[_ngcontent-%COMP%] {\n  color: #0072ce !important;\n  font-family: "GothamNarrowBold", sans-serif;\n  cursor: pointer;\n  font-weight: bold;\n  text-decoration: underline;\n}\n.asrch[_ngcontent-%COMP%] {\n  width: 24%;\n}\n.frow[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background: #fff;\n  z-index: 9999;\n  width: 840px;\n}\n.docIcon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  top: -5px;\n  position: relative;\n  font-size: 15px;\n}\n  .modal {\n  z-index: 1055 !important;\n}\n  .modal-backdrop {\n  z-index: 1050 !important;\n}\n@media screen and (max-width: 767px) {\n  .left-block1[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n  .example-container1[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n  .colpart[_ngcontent-%COMP%] {\n    min-width: 100%;\n    margin-bottom: 20px;\n  }\n  .w-90[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .pimg[_ngcontent-%COMP%] {\n    padding-left: 10px;\n  }\n  .mcol[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n    .my-Owner .modal-dialog {\n    max-width: 100% !important;\n    width: 95% !important;\n  }\n  .asrch[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .del_doc.del_doc1[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin-bottom: 10px;\n  }\n}\n.checkmark[_ngcontent-%COMP%]:before {\n  content: "L";\n  font-family: "gothambook", sans-serif;\n  transform: scaleX(-1) rotate(-35deg);\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 1em;\n  width: 1em;\n  color: #000000c7;\n  height: 1em;\n  position: absolute;\n  left: 90%;\n  top: 10px;\n}\n/*# sourceMappingURL=create-orders.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateOrdersComponent, { className: "CreateOrdersComponent", filePath: "src\\app\\modules\\refrence-lab\\orders\\create-orders\\create-orders.component.ts", lineNumber: 49 });
})();

// src/app/modules/refrence-lab/orders/add-orders/add-orders.component.ts
var _c05 = (a0) => ({ "checkmark": a0 });
var _c15 = (a0, a1, a2, a3, a4, a5) => ({ dotdosskyBlue: a0, dotdosGreen: a1, dotdosorange: a2, dotdosequine: a3, dotdosBlue: a4, dotdosallother: a5 });
function AddOrdersComponent_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error", 32);
    \u0275\u0275text(1, " Please select a panel/test. ");
    \u0275\u0275elementEnd();
  }
}
function AddOrdersComponent_span_27_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 37);
    \u0275\u0275text(1, " create ");
    \u0275\u0275elementEnd();
  }
}
function AddOrdersComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275listener("click", function AddOrdersComponent_span_27_Template_span_click_0_listener() {
      const test_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectedArrayRowdata(test_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "a", 34);
    \u0275\u0275listener("click", function AddOrdersComponent_span_27_Template_a_click_2_listener() {
      const test_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openPanelTestListModal(test_r3));
    });
    \u0275\u0275template(3, AddOrdersComponent_span_27_mat_icon_3_Template, 2, 0, "mat-icon", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "img", 36);
    \u0275\u0275listener("click", function AddOrdersComponent_span_27_Template_img_click_4_listener() {
      const test_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.CancelNotes(test_r3));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const test_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", test_r3.TestName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", test_r3.haseQuestion);
  }
}
function AddOrdersComponent_ng_template_40_div_3_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function AddOrdersComponent_ng_template_40_div_3_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.clearSearchField());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AddOrdersComponent_ng_template_40_div_3_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const filter_r7 = ctx.$implicit;
    \u0275\u0275property("value", filter_r7.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", filter_r7.Name, " ");
  }
}
function AddOrdersComponent_ng_template_40_div_3_div_31_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ord_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ord_r10.code, " ", ord_r10.description, "");
  }
}
function AddOrdersComponent_ng_template_40_div_3_div_31_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "small");
    \u0275\u0275text(2, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(order_r9.Price);
  }
}
function AddOrdersComponent_ng_template_40_div_3_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275listener("click", function AddOrdersComponent_ng_template_40_div_3_div_31_Template_div_click_0_listener() {
      const order_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onSelect(order_r9));
    });
    \u0275\u0275elementStart(1, "div", 74)(2, "mat-checkbox", 75);
    \u0275\u0275listener("change", function AddOrdersComponent_ng_template_40_div_3_div_31_Template_mat_checkbox_change_2_listener($event) {
      const order_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.updateFilterArray($event, order_r9));
    });
    \u0275\u0275twoWayListener("ngModelChange", function AddOrdersComponent_ng_template_40_div_3_div_31_Template_mat_checkbox_ngModelChange_2_listener($event) {
      const order_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(order_r9.isChecked, $event) || (order_r9.isChecked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(3, "span", 76);
    \u0275\u0275elementStart(4, "span", 77);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 78);
    \u0275\u0275element(7, "img", 79);
    \u0275\u0275elementStart(8, "div", 80)(9, "div", 81)(10, "div")(11, "small");
    \u0275\u0275text(12, "Sample Requirements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "small");
    \u0275\u0275text(17, "TAT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div")(21, "small");
    \u0275\u0275text(22, "Tube Type");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, AddOrdersComponent_ng_template_40_div_3_div_31_div_23_Template, 2, 2, "div", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, AddOrdersComponent_ng_template_40_div_3_div_31_div_24_Template, 5, 1, "div", 83);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const order_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", order_r9.isChecked);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction6(8, _c15, order_r9.Menu === "Blue", order_r9.Menu === "Green", order_r9.Menu === "Orange", order_r9.Menu === "Equine", order_r9.Menu === "AvianExotic", order_r9.Menu === "AllOther"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", order_r9.TestName, " ", order_r9.OrderCode, "");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(order_r9.SampleRequirements);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(order_r9.TAT);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", order_r9.TubeType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.isViewDOSPrice);
  }
}
function AddOrdersComponent_ng_template_40_div_3_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.label.Norecordsfound, " ");
  }
}
function AddOrdersComponent_ng_template_40_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "div", 45)(3, "mat-form-field", 46)(4, "mat-select", 47);
    \u0275\u0275twoWayListener("ngModelChange", function AddOrdersComponent_ng_template_40_div_3_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.SearchTestName, $event) || (ctx_r3.SearchTestName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "mat-option", 48);
    \u0275\u0275text(6, "Search by Test Name ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-option", 49);
    \u0275\u0275text(8, "Search all Fields ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "div", 50)(10, "mat-form-field", 51)(11, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function AddOrdersComponent_ng_template_40_div_3_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.searchText, $event) || (ctx_r3.searchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function AddOrdersComponent_ng_template_40_div_3_Template_input_keydown_enter_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.getorderTest());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 53);
    \u0275\u0275element(13, "img", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, AddOrdersComponent_ng_template_40_div_3_button_14_Template, 3, 0, "button", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 56)(16, "div", 57)(17, "mat-form-field", 58)(18, "mat-select", 59);
    \u0275\u0275twoWayListener("ngModelChange", function AddOrdersComponent_ng_template_40_div_3_Template_mat_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.SelectedClass, $event) || (ctx_r3.SelectedClass = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(19, AddOrdersComponent_ng_template_40_div_3_mat_option_19_Template, 2, 2, "mat-option", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 61)(21, "mat-checkbox", 62);
    \u0275\u0275twoWayListener("ngModelChange", function AddOrdersComponent_ng_template_40_div_3_Template_mat_checkbox_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.SelectedFav, $event) || (ctx_r3.SelectedFav = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AddOrdersComponent_ng_template_40_div_3_Template_mat_checkbox_ngModelChange_21_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.getorderTest());
    });
    \u0275\u0275text(22, " Favorites ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 63)(24, "div", 64)(25, "a", 65);
    \u0275\u0275listener("click", function AddOrdersComponent_ng_template_40_div_3_Template_a_click_25_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.clearAll());
    });
    \u0275\u0275text(26, "Clear All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 66);
    \u0275\u0275listener("click", function AddOrdersComponent_ng_template_40_div_3_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.getorderTest(true));
    });
    \u0275\u0275text(28, " Search ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 67)(30, "div", 68);
    \u0275\u0275template(31, AddOrdersComponent_ng_template_40_div_3_div_31_Template, 25, 15, "div", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, AddOrdersComponent_ng_template_40_div_3_div_32_Template, 2, 1, "div", 70);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.SearchTestName);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c05, ctx_r3.SearchTestName === "Search by Test Name"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c05, ctx_r3.SearchTestName === "Search all fields"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.searchText);
    \u0275\u0275property("placeholder", ctx_r3.label.Search);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.searchText);
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", ctx_r3.label.FilterByClass);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.SelectedClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.filterClassData);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.SelectedFav);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r3.filterDatafor);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r3.filterDatafor == null ? null : ctx_r3.filterDatafor.length) === 0);
  }
}
function AddOrdersComponent_ng_template_40_div_4_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 89);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 90)(4, "label", 91);
    \u0275\u0275text(5, "Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 92)(7, "mat-form-field", 51)(8, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function AddOrdersComponent_ng_template_40_div_4_ng_container_2_div_1_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r11);
      const item_r12 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(item_r12.selfNote, $event) || (item_r12.selfNote = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AddOrdersComponent_ng_template_40_div_4_ng_container_2_div_1_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r11);
      const item_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.toggleBtn($event, item_r12));
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const item_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r12.TestName);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", item_r12.selfNote);
  }
}
function AddOrdersComponent_ng_template_40_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AddOrdersComponent_ng_template_40_div_4_ng_container_2_div_1_Template, 9, 2, "div", 87);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r12.noteRequired);
  }
}
function AddOrdersComponent_ng_template_40_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 86);
    \u0275\u0275template(2, AddOrdersComponent_ng_template_40_div_4_ng_container_2_Template, 2, 1, "ng-container", 82);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.filteredArray);
  }
}
function AddOrdersComponent_ng_template_40_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94)(1, "button", 29);
    \u0275\u0275listener("click", function AddOrdersComponent_ng_template_40_div_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.resetBack());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 95);
    \u0275\u0275listener("click", function AddOrdersComponent_ng_template_40_div_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.SelectedAddtest());
    })("keydown.enter", function AddOrdersComponent_ng_template_40_div_5_Template_button_keydown_enter_3_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.SelectedAddtest());
    });
    \u0275\u0275text(4, " Next ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.label.Cancel, " ");
  }
}
function AddOrdersComponent_ng_template_40_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94)(1, "button", 29);
    \u0275\u0275listener("click", function AddOrdersComponent_ng_template_40_div_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.back());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 96);
    \u0275\u0275listener("click", function AddOrdersComponent_ng_template_40_div_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.SelectedAddtest());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.label.Back, " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.disabledBtn);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.label.Continue, " ");
  }
}
function AddOrdersComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "h4", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, AddOrdersComponent_ng_template_40_div_3_Template, 33, 16, "div", 40)(4, AddOrdersComponent_ng_template_40_div_4_Template, 3, 1, "div", 41)(5, AddOrdersComponent_ng_template_40_div_5_Template, 5, 1, "div", 42)(6, AddOrdersComponent_ng_template_40_div_6_Template, 5, 3, "div", 42);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.ownerpopupTitle, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.section === "testSelection");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.section === "moreInfo");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.section === "testSelection");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.section === "moreInfo");
  }
}
function AddOrdersComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "h4", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 97)(4, "div", 23)(5, "div", 98)(6, "label", 25);
    \u0275\u0275text(7, " Source ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-form-field", 26)(9, "textarea", 99);
    \u0275\u0275twoWayListener("ngModelChange", function AddOrdersComponent_ng_template_42_Template_textarea_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.UpdatedNotes, $event) || (ctx_r3.UpdatedNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(10, "div", 28)(11, "button", 29);
    \u0275\u0275listener("click", function AddOrdersComponent_ng_template_42_Template_button_click_11_listener() {
      const modal_r16 = \u0275\u0275restoreView(_r15).$implicit;
      return \u0275\u0275resetView(modal_r16.dismiss());
    });
    \u0275\u0275text(12, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 30);
    \u0275\u0275listener("click", function AddOrdersComponent_ng_template_42_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.notesUpdate());
    });
    \u0275\u0275text(14, " Add/Update ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.ownerpopupTitle, " ");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.UpdatedNotes);
  }
}
var AddOrdersComponent = class _AddOrdersComponent {
  constructor(commonService, dataService, modalService, refLabService, confirmationDialogService, router, headerService, patientService, route, labelService) {
    this.commonService = commonService;
    this.dataService = dataService;
    this.modalService = modalService;
    this.refLabService = refLabService;
    this.confirmationDialogService = confirmationDialogService;
    this.router = router;
    this.headerService = headerService;
    this.patientService = patientService;
    this.route = route;
    this.labelService = labelService;
    this.selectedBusinessId = localStorage.businessGuid != void 0 && localStorage.businessGuid != null && localStorage.businessGuid != "" ? parseInt(localStorage.businessGuid) : 0;
    this.SearchTestName = "Search by Test Name";
    this.filterDatafor = [];
    this.OrderTestData = [];
    this.SelectedFav = false;
    this.selectedArray = [];
    this.filteredArray = [];
    this.selectedRow = [];
    this.finalArray = [];
    this.finaPatientArray = [];
    this.AccessionNo = 0;
    this.section = "testSelection";
    this.disabledBtn = true;
    this.isOrderFormSubmitted = false;
    this.labelService.getCreateOrderScreenLabels();
    this.label = this.labelService.createOrderScreen;
    this.isViewDOSPrice = this.dataService.appData.authDetails["IsViewDOSPrice"];
    this.dataService.page.subscribe((data) => {
      if (data["filterDatafor"]) {
        this.filterDatafor = data["filterDatafor"];
        this.selectedArray = data["selectedArray"];
      }
    });
  }
  ngOnInit() {
    this.prev = this.route.snapshot.queryParamMap.get("prev");
    this.setDefault();
    if (localStorage.previousUrl == "2") {
      this.OrderPageData = this.refLabService.dataRow;
      if (this.OrderPageData) {
        this.panelOrg = this.OrderPageData.Panels;
        this.patientName = this.OrderPageData.PatientName;
      }
    } else {
      this.patientName = this.dataService.appState.selectedResult.element?.PatientName;
      console.log(this.dataService.appState);
    }
    this.isOrderId = localStorage.getItem("lastOrderId");
  }
  ngAfterViewInit() {
    this.dataService.data.subscribe((data) => {
      this.AccessionNo = data.AccessionNumber;
    });
  }
  ngOnDestroy() {
    this.dataService.pageState["filterDatafor"] = [];
    this.dataService.pageState["filteredArray"] = [];
    this.dataService.pageState["selectedArray"] = [];
    this.dataService.page.next(this.dataService.pageState);
  }
  openPanelTestListModal(editableTest) {
    const modalRef = this.modalService.open(PanelTestListModalComponent, {
      size: "lg",
      scrollable: true,
      backdrop: "static"
    });
    modalRef.result.then((result) => {
      console.log(result);
    });
    modalRef.componentInstance.headerText = "Select Tests";
    modalRef.componentInstance.ownerpopupTitle = "Select Tests";
    modalRef.componentInstance.selectedArray = this.selectedArray;
    modalRef.componentInstance.prevSelectedArray = JSON.parse(JSON.stringify(this.selectedArray));
    modalRef.componentInstance.editableTest = editableTest;
  }
  AddTest(TestModal) {
    this.ownerpopupTitle = "Select Tests";
    this.section = "testSelection";
    this.filteredArray = this.selectedArray;
    this.modalService.open(TestModal, {
      windowClass: "my-Test",
      backdrop: "static",
      keyboard: false
    });
  }
  // public clearSearchField() {
  //   this.searchText = '';
  //   this.filterDatafor = this.OrderTestData.map(a => ({ ...a }));
  //   if (this.selectedArray.length) {
  //     this.selectedArray.forEach(x => {
  //       this.selectedArray.forEach(x => {
  //         const item = this.filterDatafor.find(y => y.OrderCode == x.OrderCode);
  //         if (item) {
  //           item.isChecked = true;
  //           item.selfNote = x.selfNote;
  //         }
  //       });
  //     })
  //   }
  // }
  // public getDosfilter() {
  //   this.commonService.GetDOSFilterdetails().subscribe(data => {
  //     this.filterClassData = data.ResponseData.Class;
  //     this.filterMenuData = data.ResponseData.Menu;
  //   })
  // }
  // public getorderTest1() {
  //   let Test = {
  //     SearchText: this.searchText,
  //     ClassName: this.SelectedClass,
  //     Menu: this.selectedMenu,
  //     IsOrder: false,
  //     UserGuid: this.headerService.loginUserGuid,
  //     IsFavourite: this.SelectedFav
  //   }
  //   if (this.OrderTestData != null) {
  //     this.refLabService.getOrderTestList(Test).subscribe(data => {
  //       this.OrderTestData = data.ResponseData.TestDetail;
  //       this.filterDatafor = this.OrderTestData.map(a => ({ ...a }));
  //       this.filterDatafor.map(data => {
  //         data.isChecked = false;
  //         data.selfNote = "";
  //       })
  //     })
  //   }
  // }
  onChange(Menu) {
    this.menuSelected = Menu;
    if (this.selectedfav != false && this.classSelected != "" && this.menuSelected != "") {
      this.filterDatafor = this.OrderTestData.filter((x) => x.IsFavourite && x.Class == this.classSelected && x.Menu == this.menuSelected);
    } else {
      if (this.classSelected != "" && this.menuSelected != "") {
        this.filterDatafor = this.OrderTestData.filter((x) => x.Class == this.classSelected && x.Menu == this.menuSelected);
      } else {
        if (this.selectedfav != false && this.menuSelected != "") {
          this.filterDatafor = this.OrderTestData.filter((x) => x.IsFavourite && x.Menu == this.menuSelected);
        } else {
          if (this.menuSelected != "") {
            this.filterDatafor = this.OrderTestData.filter((x) => x.Menu.toLowerCase() == Menu.toLowerCase());
          }
        }
      }
    }
  }
  onChangeClass(cls) {
    this.classSelected = cls;
    if (this.selectedfav != false && this.menuSelected != "" && this.classSelected != "") {
      this.filterDatafor = this.OrderTestData.filter((x) => x.IsFavourite && x.Menu == this.menuSelected && x.Class == this.classSelected);
    } else {
      if (this.menuSelected != "" && this.classSelected != "") {
        this.filterDatafor = this.OrderTestData.filter((x) => x.Menu == this.menuSelected && x.Class == cls);
      } else {
        if (this.selectedfav != false && this.classSelected != "") {
          this.filterDatafor = this.OrderTestData.filter((x) => x.IsFavourite && x.Class == this.classSelected);
        } else {
          if (this.classSelected != "") {
            this.filterDatafor = this.OrderTestData.filter((x) => x.Class.toLowerCase() == cls.toLowerCase());
          }
        }
      }
    }
  }
  onChangeFav(fav) {
    this.selectedfav = fav;
    if (this.menuSelected != "" && this.classSelected != "" && this.selectedfav != false) {
      this.filterDatafor = this.OrderTestData.filter((x) => x.Menu == this.menuSelected && x.Class == this.classSelected && x.IsFavourite);
    } else {
      if (this.classSelected != "" && fav != false) {
        this.filterDatafor = this.OrderTestData.filter((x) => x.Class == this.classSelected && x.IsFavourite);
      } else {
        if (this.selectedfav == true) {
          this.filterDatafor = this.OrderTestData.filter((x) => x.IsFavourite);
        }
      }
    }
  }
  // public onSelect(selectedItem: any) {
  //   this.filterDatafor.map(data => {
  //     if (data.TestId == selectedItem.TestId) {
  //       if (data.isChecked) {
  //         data.isChecked = true;
  //       }
  //       else {
  //         data.isChecked = false;
  //       }
  //       return data
  //     }
  //   })
  // }
  /**  note icon for edit */
  additionalNotes(AddNotes, test) {
    this.selectedNotesData = test;
    this.selectedArray.map((item) => {
      if (item.TestId == test.TestId) {
        this.UpdatedNotes = test.selfNote;
        return item;
      }
    });
    this.ownerpopupTitle = test.TestName + " Add Source";
    this.modalService.open(AddNotes, {
      windowClass: "my-Note",
      backdrop: "static",
      keyboard: false
    });
  }
  // public updateFilterArray(event, order) {
  //   if (event.checked) {
  //     this.filteredArray.push(order)
  //   } else {
  //     const idx = this.filteredArray.findIndex(x => x.TestId == order.TestId)
  //     this.filteredArray.splice(idx, 1)
  //   }
  //   let nextBtn = document.getElementById('nextBtn');
  //   if (nextBtn) {
  //     nextBtn.focus();
  //   }
  // }
  // public SelectedAddtest() {
  //   //this.filteredArray = this.filterDatafor.filter(item => item.isChecked == true);
  //   const filteredArray = this.filteredArray.filter(x => {
  //     if (this.refLabService.moreInfoReqFor.indexOf(x.OrderCode) !== -1) {
  //       x.noteRequired = true;
  //       return true;
  //     }
  //   })
  //   if (this.filteredArray.length) {
  //     if (this.section == 'testSelection' && filteredArray.length) {
  //       this.section = 'moreInfo';
  //       this.ownerpopupTitle = 'More information required'
  //       this.toggleBtn();
  //       return;
  //     }
  //     this.selectedArray = this.filteredArray;
  //     this.searchText = '';
  //     this.selectedMenu = "";
  //     this.SelectedClass = "";
  //     this.SelectedFav = false;
  //     this.modalService.dismissAll();
  //   }
  // }
  /**
   * back
   */
  // public back() {
  //   this.section = 'testSelection';
  //   this.ownerpopupTitle = "Select Tests";
  // }
  // public resetBack() {
  //   this.section = 'testSelection';
  //   this.ownerpopupTitle = "Select Tests";
  //   this.searchText = '';
  //   this.selectedMenu = "";
  //   this.SelectedClass = "";
  //   this.SelectedFav = false;
  //   this.modalService.dismissAll();
  // }
  /**
   * toggleBtn
   */
  // public toggleBtn(val: any = null, item: any = null) {
  //   if (item) item.selfNote = val;
  //   const reqItems = this.filteredArray.filter(x => {
  //     if (x.noteRequired) {
  //       return !x.selfNote;
  //     }
  //   });
  //   this.disabledBtn = reqItems.length > 0;
  // }
  // applyFilter(selected: string, selectedclass) {
  // let filterData = [];
  // this.filterDatafor = this.OrderTestData.filter(item => {
  //   if (item.TestName.toString().toLowerCase().indexOf(selected.toLowerCase()) !== -1) {
  //     return true;
  //   } else if (item.OrderCode.toString().toLowerCase().indexOf(selected.toLowerCase()) !== -1) {
  //     return true;
  //   }
  //   else if (item.Component.toString().toLowerCase().indexOf(selected.toLowerCase()) !== -1) {
  //     return true;
  //   }
  //   return false;
  // });
  // }
  onTypeChange() {
    if (this.searchText != null && this.searchText[this.searchText.length - 1] != " ") {
    }
  }
  CancelNotes(test) {
    this.filterDatafor.forEach((item) => {
      if (item.TestId == test.TestId) {
        item.isChecked = false;
      }
    });
    const idx = this.selectedArray.findIndex((x) => x.TestId == test.TestId);
    this.selectedArray.splice(idx, 1);
    this.dataService.pageState["filterDatafor"] = this.filterDatafor;
    this.dataService.page.next(this.dataService.pageState);
  }
  notesUpdate() {
    this.selectedArray.map((item) => {
      if (item.TestId == this.selectedNotesData.TestId) {
        this.UpdatedNotes = this.checkScriptTag(this.UpdatedNotes);
        item.selfNote = this.UpdatedNotes;
        return item;
      }
    });
    this.modalService.dismissAll();
  }
  checkScriptTag(str) {
    if (str) {
      const rgx = /[^A-Za-z0-9.,'"?/ ]/gi;
      str = str.replace(rgx, "").replace(/ +/g, " ");
    }
    return str;
  }
  AddOrderDetails() {
    if (!this.selectedArray.length) {
      this.isOrderFormSubmitted = true;
      return;
    }
    this.selectedArray.forEach((o) => {
      if (o.selectedQA) {
        this.finalArray.push(o.selectedQA);
      } else {
        this.finalArray.push({ Code: o.OrderCode });
      }
    });
    const ord = {
      UserGuid: this.dataService.appData.authDetails["UserGuid"],
      BusinessGuid: this.dataService.appData.authDetails["BusinessGuid"],
      OrderId: this.isOrderId,
      TestAdd: this.finalArray,
      Comments: this.TypeNotes
    };
    if (this.finalArray.length) {
      this.refLabService.addOrderDetailExt(ord).subscribe((data) => {
        if (data.StatusCode == 200) {
          this.confirmationDialogService.confirm("", "Request has been submitted and is pending sample confirmation.", "OK", "Cancel", "sm", true, false).then((confirmed) => {
            if (confirmed) {
              if (this.prev)
                this.router.navigateByUrl("/refLab/orders?refresh=true");
              this.commonService.goBack();
            }
          });
        } else {
          const respErrorMessage = "Connection error. Try again later. If issue persists, please contact Reference Lab Customer Service at 888-965-9652 or referencelabsupport@zoetis.com.";
          this.confirmationDialogService.confirm("", respErrorMessage, "Dismiss", "Cancel", "sm", true, false);
        }
      }, (err) => {
        console.log(JSON.stringify(err));
        const respErrorMessage = "Connection error. Try again later. If issue persists, please contact Reference Lab Customer Service at 888-965-9652 or referencelabsupport@zoetis.com.";
        this.confirmationDialogService.confirm("", respErrorMessage, "Dismiss", "Cancel", "sm", true, false);
      });
    }
  }
  // public clearAll() {
  //   this.searchText = '';
  //   this.selectedMenu = "";
  //   this.SelectedClass = "";
  //   this.menuSelected = "";
  //   this.SelectedFav = false;
  //   this.filterDatafor = this.OrderTestData.map(a => ({ ...a }));
  //   this.filterDatafor.map(data => {
  //     data.isChecked = false;
  //   })
  //   this.setDefault();
  //   // this.getorderTest();
  // }
  setDefault() {
    this.menuSelected = "";
    this.classSelected = "";
    this.selectedfav = "";
  }
  static {
    this.\u0275fac = function AddOrdersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddOrdersComponent)(\u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(RefLabService), \u0275\u0275directiveInject(ConfirmationDialogService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HeaderService), \u0275\u0275directiveInject(PatientService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(LabelService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddOrdersComponent, selectors: [["app-add-orders"]], decls: 44, vars: 8, consts: [["TestModal", ""], ["AddNotes", ""], ["hasBackdrop", "true", "id", "full_page_temp", 1, "example-container1"], [1, "example-sidenav-content", "w-100", "sidefilter", "dashboard"], [1, "left-block1"], [1, "p-0"], [1, "mt-0"], [1, "mt-2", "mb-2", "d-flex", "justify-content-between", "align-items-center", "w-100", "deskp"], [1, "d-flex", "justify-content-between", "align-items-center", "w-100", "toprow"], [1, "d-flex", "justify-content-between", "head1", "align-items-center", "text-center", "w-100"], [1, "text-center", "text-primary", "mt-4", "mb-4", "w-100"], [2, "color", "black"], [1, "d-flex", "justify-content-between", "pl-3", "pb-3", "align-items-center", "toprow"], [1, "d-flex", "justify-content-between", "head1", "align-items-center", "text-center", "w-100", "mapp"], [1, "d-flex", "justify-content-between", "align-items-center", "w-100", 2, "margin-top", "-78px"], [1, "backlink", 2, "text-decoration", "underline", 3, "click"], [1, "text-center", "mt-4", "mb-4", "w-100", "mobilep"], [1, "col", "my-3", "mt-4", "d-flex", "align-items-center"], ["src", "../../../assets/img/add-button.png ", "alt", "", 3, "click"], [1, "d-flex", "justify-content-start", "pl-3", "flex-wrap", "addpanel"], ["class", "orderErr", 4, "ngIf"], ["class", "mr-3 test_text mb-3", 3, "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "col-sm-12", "mt-3"], [1, "col", "p-0", "pl-1"], [1, "d-flex", "align-items-top", "nobtm-pad", "flex-column"], ["for", "", 1, "mb-0"], ["appearance", "outline", "floatLabel", "always"], ["matInput", "", "maxlength", "500", "placeholder", "Type Here", "rows", "10", 3, "ngModelChange", "ngModel"], [1, "modal-footer", "row", "mt-5", "justify-content-center"], ["type", "button", "mat-raised-button", "", "color", "primary", 1, "cancel-btn", "mr-2", 3, "click"], ["type", "button", "mat-raised-button", "", "color", "accent", 1, "save-change", "mr-2", 3, "click"], ["backdrop", "static"], [1, "orderErr"], [1, "mr-3", "test_text", "mb-3", 3, "click"], ["href", "javascript:void(0)", 1, "docIcon", 2, "width", "50px", "color", "#007bff", 3, "click"], ["class", "material-icons-outlined", "style", "color: #007bff;", 4, "ngIf"], ["src", "../../../assets/img/cancel@2x.png", "width", "11", "alt", "", 3, "click"], [1, "material-icons-outlined", 2, "color", "#007bff"], [1, "modal-header", "text-center"], ["id", "modal-basic-title", 1, "modal-title", "w-100"], ["class", "modal-body filter_wrapper", 4, "ngIf"], ["class", "modal-body filter_wrapper", "style", "padding: 4rem;", 4, "ngIf"], ["class", "modal-footer row mt-3 pt-0 justify-content-center", 4, "ngIf"], [1, "modal-body", "filter_wrapper"], [1, "d-flex", "justify-content-start", "flex-wrap", "align-items-center", "mb-3"], ["id", "filer_by_menu", 1, "asrch", 2, "width", "20%"], ["appearance", "outline", "floatLabel", "always", 1, "dotpart", "w-100"], [3, "ngModelChange", "ngModel"], ["value", "Search by Test Name", 3, "ngClass"], ["value", "Search all fields", 3, "ngClass"], [1, "asrch", 2, "width", "25%"], ["appearance", "outline", "floatLabel", "always", 1, "w-100"], ["matInput", "", "maxlength", "60", "autocomplete", "off", 3, "ngModelChange", "keydown.enter", "ngModel", "placeholder"], ["matPrefix", ""], ["src", "../../../../assets/img/search-icon.png", "alt", "search-icon"], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [1, "asrch", 2, "width", "35%"], [1, "float-right", "pull-right"], ["appearance", "outline", "floatLabel", "always", 1, "float-left", "w-60"], [3, "ngModelChange", "placeholder", "ngModel"], ["class", "formselect", 3, "value", 4, "ngFor", "ngForOf"], [1, "float-left", "w-40", "mt-2", "pl-2"], ["value", "checked", 1, "example-margin", 3, "ngModelChange", "ngModel"], [1, "asearch", 2, "width", "20%"], [1, "del_doc", "col1", "float-right"], [1, "clrall", "mr-2", 3, "click"], ["ngbAutofocus", "", "mat-raised-button", "", 1, "w-70", "g-btn", 2, "order", "2", 3, "click"], [1, "d-flex", "flex-wrap", "chkbox_wrapper"], [1, "d-flex", "align-content-start", "flex-wrap", "w-100"], ["class", "w-50   del_doc del_doc1  pr-4", 3, "click", 4, "ngFor", "ngForOf"], ["class", "w-100 text-center", 4, "ngIf"], ["mat-button", "", "mat-icon-button", "", "matSuffix", "", "aria-label", "Clear", 3, "click"], [1, "formselect", 3, "value"], [1, "w-50", "del_doc", "del_doc1", "pr-4", 3, "click"], [1, "mb-3", "d-flex", "align-items-center", "justify-content-between", "w-100"], [1, "example-margin", "d-flex", "align-items-center", 3, "change", "ngModelChange", "ngModel"], [3, "ngClass"], [1, "chk_label"], [1, "tooltip"], ["src", "../../../assets/img/info@2x.png", "alt", "", "width", "15"], [1, "tooltiptext"], [1, "tool_text", "p-3"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "w-100", "text-center"], [1, "modal-body", "filter_wrapper", 2, "padding", "4rem"], [1, "d-flex", "justify-content-between", "flex-wrap", "align-items-center", "mb-3"], ["class", "row col-12 d-flex align-items-center mb-3", 4, "ngIf"], [1, "row", "col-12", "d-flex", "align-items-center", "mb-3"], [1, "col-3", "text-bold", "pt-2"], [1, "col-9"], [1, "pb-2"], [1, "w-100"], ["type", "text", "maxlength", "50", "matInput", "", "placeholder", "Enter Source", "autocomplete", "off", 3, "ngModelChange", "ngModel"], [1, "modal-footer", "row", "mt-3", "pt-0", "justify-content-center"], ["type", "button", "id", "nextBtn", "mat-raised-button", "", "color", "accent", 1, "save-change", "mr-2", 3, "click", "keydown.enter"], ["type", "button", "mat-raised-button", "", "color", "accent", 1, "save-change", "mr-2", 3, "click", "disabled"], [1, "modal-body"], [1, "d-flex", "flex-column", "align-items-top", "nobtm-pad"], ["matInput", "", "maxlength", "50", 3, "ngModelChange", "ngModel"]], template: function AddOrdersComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "mat-drawer-container", 2)(1, "div", 3)(2, "div", 4)(3, "mat-card", 5)(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "span", 9)(8, "h5", 10);
        \u0275\u0275text(9, "Add a panel to Accession ");
        \u0275\u0275elementStart(10, "span", 11);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "div", 12)(13, "div", 13)(14, "span", 14)(15, "a", 15);
        \u0275\u0275listener("click", function AddOrdersComponent_Template_a_click_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.commonService.goBack());
        });
        \u0275\u0275text(16, "Back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "h5", 16);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(19, "div", 17)(20, "label");
        \u0275\u0275text(21, " Add Panels/Tests");
        \u0275\u0275elementStart(22, "sup");
        \u0275\u0275text(23, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "img", 18);
        \u0275\u0275listener("click", function AddOrdersComponent_Template_img_click_24_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openPanelTestListModal());
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 19);
        \u0275\u0275template(26, AddOrdersComponent_mat_error_26_Template, 2, 0, "mat-error", 20)(27, AddOrdersComponent_span_27_Template, 5, 2, "span", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 22)(29, "div", 23)(30, "div", 24)(31, "label", 25);
        \u0275\u0275text(32, "Case History and Additional Case Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "mat-form-field", 26)(34, "textarea", 27);
        \u0275\u0275twoWayListener("ngModelChange", function AddOrdersComponent_Template_textarea_ngModelChange_34_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.TypeNotes, $event) || (ctx.TypeNotes = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(35, "div", 28)(36, "button", 29);
        \u0275\u0275listener("click", function AddOrdersComponent_Template_button_click_36_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.commonService.goBack());
        });
        \u0275\u0275text(37, " Cancel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "button", 30);
        \u0275\u0275listener("click", function AddOrdersComponent_Template_button_click_38_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.AddOrderDetails());
        });
        \u0275\u0275text(39, " Submit ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(40, AddOrdersComponent_ng_template_40_Template, 7, 5, "ng-template", 31, 0, \u0275\u0275templateRefExtractor)(42, AddOrdersComponent_ng_template_42_Template, 15, 2, "ng-template", 31, 1, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate1(" ", ctx.AccessionNo, "");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("Add On Panel for ", ctx.patientName, "");
        \u0275\u0275advance(2);
        \u0275\u0275classMapInterpolate1("mr-3 ", ctx.isOrderFormSubmitted && !ctx.selectedArray.length ? "mat-error" : "head1", "");
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.isOrderFormSubmitted && !ctx.selectedArray.length);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.selectedArray);
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.TypeNotes);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, MatLegacyError, MatLegacyFormField, MatLegacyPrefix, MatLegacySuffix, MatLegacyInput, MatLegacyButton, MatIcon, MatLegacyCheckbox, MatLegacyCard, MatLegacySelect, MatLegacyOption, MatDrawerContainer], styles: ['\n\n.example-container1[_ngcontent-%COMP%] {\n  height: calc(100vh - 90px);\n  margin-top: 70px;\n  position: relative;\n  z-index: 0;\n}\n.save-change[_ngcontent-%COMP%] {\n  background-color: #ff6400;\n  color: #fff;\n  min-width: 125px;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  min-width: 125px;\n  border: 1px solid #b9babb;\n  background: #edebeb99 !important;\n  color: #747576 !important;\n}\n.dotdosskyBlue[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #2d68c4;\n}\n.dotdosGreen[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #31b44a;\n}\n.dotdosorange[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #fed504;\n}\n.dotdosequine[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #006271;\n}\n.dotdosBlue[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #a0dcee;\n}\n.dotdosallother[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #a884bb;\n}\n#full_page_temp[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 13px;\n  margin-bottom: 0px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.w-90[_ngcontent-%COMP%] {\n  width: 90%;\n}\n#full_page_temp[_ngcontent-%COMP%]   .filter_wrapper[_ngcontent-%COMP%]   .mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%] {\n  line-height: 17px;\n  font-size: 13px;\n  width: 90%;\n  word-break: break-word;\n  white-space: break-spaces;\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  width: 90% !important;\n}\n.chk_label[_ngcontent-%COMP%] {\n  line-height: 24px;\n  width: 90% !important;\n  word-break: break-word;\n  white-space: break-spaces !important;\n}\n.chkbox_wrapper[_ngcontent-%COMP%] {\n  height: calc(100vh - 350px);\n  overflow: auto;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 13px;\n  margin-bottom: 0px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-left: 15px;\n  margin-bottom: 20px;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: none !important;\n}\n.head1[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n.test_text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tooltip[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  font-size: 13px;\n  opacity: 1;\n}\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 270px;\n  background-color: #fff;\n  color: #000;\n  border-radius: 6px;\n  padding: 0;\n  position: absolute;\n  z-index: 1;\n  top: 0px;\n  right: 128%;\n  box-shadow: 0 0 12px 0 rgb(0 0 0 / 19%) !important;\n}\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.tool_header[_ngcontent-%COMP%] {\n  background: #0072ce;\n  padding: 16px 0;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  color: #fff;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.tool_text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.norecord[_ngcontent-%COMP%] {\n  width: 99.1% !important;\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  border: 1px solid #ccc9;\n  border-top: transparent;\n  background-color: #fbfbfb;\n}\n  .my-Owner .modal-dialog {\n  max-width: 80% !important;\n  width: 80% !important;\n}\n  .my-Test .modal-dialog {\n  max-width: 100% !important;\n  width: 90% !important;\n}\n  .my-Note .modal-dialog {\n  max-width: 50% !important;\n  width: 50% !important;\n}\n.subtext[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9e9e9e;\n}\n.option_outer[_ngcontent-%COMP%] {\n  line-height: 16px;\n}\n.docIcon[_ngcontent-%COMP%] {\n  width: 50px;\n  display: inline-block;\n  position: relative;\n  top: 0px;\n  text-align: center;\n}\n.addpanel[_ngcontent-%COMP%] {\n  max-height: 173px;\n  overflow-y: scroll;\n  padding-top: 5px;\n}\n.clrall[_ngcontent-%COMP%] {\n  color: #0072ce !important;\n  font-family: "GothamNarrowBold", sans-serif;\n  cursor: pointer;\n  font-weight: bold;\n  text-decoration: underline;\n}\n.formselect.mat-option[_ngcontent-%COMP%] {\n  display: flex;\n}\n.asrch[_ngcontent-%COMP%] {\n  width: 24%;\n}\n.mobilep[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 767px) {\n  .left-block1[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n  .example-container1[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .mobilep[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .deskp[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .mapp[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-top: initial !important;\n  }\n  .mapp[_ngcontent-%COMP%]   .backlink[_ngcontent-%COMP%] {\n    display: block !important;\n    width: 36%;\n    text-align: left;\n    padding-left: 0%;\n  }\n    .my-Test .modal-dialog {\n    max-width: 100% !important;\n    width: 95% !important;\n  }\n  .left-block1[_ngcontent-%COMP%]   .head1[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    text-align: left !important;\n    padding: 0;\n    font-size: 16px;\n  }\n  .asrch[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .del_doc.del_doc1[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin-bottom: 10px;\n  }\n}\n  .docIcon .mat-icon {\n  height: 14px !important;\n  width: 14px !important;\n}\n  .docIcon .material-icons {\n  font-size: 17px !important;\n}\n.docIcon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  top: -5px;\n  position: relative;\n  font-size: 15px;\n}\n.test_text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  border-radius: 6px;\n  padding: 5px 7px;\n  background: #eeeeeee8;\n}\n.text-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.g-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fd6400;\n  border-color: #fd6400;\n}\n.example-sidenav-content.sidefilter.dashboard[_ngcontent-%COMP%] {\n  height: calc(100vh - 95px);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=add-orders.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddOrdersComponent, { className: "AddOrdersComponent", filePath: "src\\app\\modules\\refrence-lab\\orders\\add-orders\\add-orders.component.ts", lineNumber: 13 });
})();

// src/app/modules/refrence-lab/routing.module.ts
var routes = [
  {
    path: "",
    component: RefrenceLabComponent,
    canActivate: [RefLabGuard],
    children: [
      {
        path: "orders",
        component: OrdersComponent
      },
      {
        path: "createOrder",
        component: CreateOrdersComponent,
        canActivate: [IsReflabActive]
      },
      {
        path: "addOrder",
        component: AddOrdersComponent,
        canActivate: [IsReflabActive]
      },
      // {
      //     path: "dos",
      //     component: DosComponent,
      //     canActivate: [RefLabGuard]
      // },
      {
        path: "dos",
        loadChildren: () => import("./dos-page.module-WE67YQGL.js").then((m) => m.DosPageModule)
      }
      //   {
      //     path: "accession-details",
      //     component: DetailsComponent,
      //     canActivate: [RefLabGuard]
      // }
    ]
  }
];
var RoutingModule = class _RoutingModule {
  static {
    this.\u0275fac = function RoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};

// node_modules/@ngx-maintenance/ng2-search-filter/fesm2022/ngx-maintenance-ng2-search-filter.mjs
var Ng2SearchPipe = class _Ng2SearchPipe {
  /**
     * @param items object from array
     * @param term term's search
     * @param excludes array of strings which will ignored during search
     */
  transform(items, term, excludes = []) {
    if (!term || !items) return items;
    return _Ng2SearchPipe.filter(items, term, excludes);
  }
  /**
   *
   * @param items List of items to filter
   * @param term  a string term to compare with every property of the list
   * @param excludes List of keys which will be ignored during search
   *
   */
  static filter(items, term, excludes) {
    const toCompare = term.toLowerCase();
    function checkInside(item, term2) {
      if (typeof item === "string" && item.toString().toLowerCase().includes(toCompare)) {
        return true;
      }
      for (let property in item) {
        if (item[property] === null || item[property] == void 0 || excludes.includes(property)) {
          continue;
        }
        if (typeof item[property] === "object") {
          if (checkInside(item[property], term2)) {
            return true;
          }
        } else if (item[property].toString().toLowerCase().includes(toCompare)) {
          return true;
        }
      }
      return false;
    }
    return items.filter(function(item) {
      return checkInside(item, term);
    });
  }
  static {
    this.\u0275fac = function Ng2SearchPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Ng2SearchPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
      name: "filter",
      type: _Ng2SearchPipe,
      pure: false,
      standalone: true
    });
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _Ng2SearchPipe,
      factory: _Ng2SearchPipe.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Ng2SearchPipe, [{
    type: Pipe,
    args: [{
      name: "filter",
      pure: false,
      standalone: true
    }]
  }, {
    type: Injectable
  }], null, null);
})();
var Ng2SearchPipeModule = class _Ng2SearchPipeModule {
  static {
    this.\u0275fac = function Ng2SearchPipeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Ng2SearchPipeModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _Ng2SearchPipeModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Ng2SearchPipeModule, [{
    type: NgModule,
    args: [{
      imports: [Ng2SearchPipe],
      exports: [Ng2SearchPipe]
    }]
  }], null, null);
})();

// src/app/modules/refrence-lab/dos/dos.component.ts
var _c06 = (a0) => ({ expandedall: a0 });
var _c16 = () => ["expandedDetail"];
var _c24 = (a0, a1, a2, a3, a4, a5) => ({ dotdosskyBlue: a0, dotdosGreen: a1, dotdosorange: a2, dotdosequine: a3, dotdosBlue: a4, dotdosallother: a5 });
var _c34 = (a0, a1, a2, a3, a4, a5) => ({ dosskyBlue: a0, dosGreen: a1, dosorange: a2, dosequine: a3, dosBlue: a4, dosallother: a5 });
var _c44 = (a0, a1, a2, a3, a4, a5, a6) => ({ "dot-sst": a0, "dot-rtt": a1, "dot-urine": a2, "dot-btt": a3, "dot-feces": a4, "dot-grntt": a5, "dot-ltt": a6 });
function DosComponent_th_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Name, " ");
  }
}
function DosComponent_td_114_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275listener("click", function DosComponent_td_114_span_2_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const element_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setClickedtrueRow(element_r5));
    });
    \u0275\u0275element(1, "img", 91);
    \u0275\u0275elementEnd();
  }
}
function DosComponent_td_114_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 90);
    \u0275\u0275listener("click", function DosComponent_td_114_span_3_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const element_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setClickedtrueRow(element_r5));
    });
    \u0275\u0275element(1, "img", 92);
    \u0275\u0275elementEnd();
  }
}
function DosComponent_td_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 85)(1, "div", 86);
    \u0275\u0275template(2, DosComponent_td_114_span_2_Template, 2, 0, "span", 87)(3, DosComponent_td_114_span_3_Template, 2, 0, "span", 87);
    \u0275\u0275elementStart(4, "div", 88)(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "span", 89);
    \u0275\u0275text(9, "Test Code:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction6(5, _c34, element_r5.Menu === "Blue", element_r5.Menu === "Green", element_r5.Menu === "Orange", element_r5.Menu === "Equine", element_r5.Menu === "AvianExotic", element_r5.Menu === "AllOther"));
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
function DosComponent_th_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Class, " ");
  }
}
function DosComponent_td_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 94)(1, "span", 95);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", element_r7.Class, " ");
  }
}
function DosComponent_th_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.SampleRequirements, " ");
  }
}
function DosComponent_td_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", element_r8.SampleRequirements, " ");
  }
}
function DosComponent_th_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.TubeType, " ");
  }
}
function DosComponent_td_123_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 88)(2, "span", 97);
    \u0275\u0275element(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tube_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction7(2, _c44, tube_r9.code === "SST", tube_r9.code === "RTT", tube_r9.code === "Urine", tube_r9.code === "BTT", tube_r9.code === "Feces", tube_r9.code === "GrnTT", tube_r9.code === "LTT"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tube_r9.code);
  }
}
function DosComponent_td_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 94);
    \u0275\u0275template(1, DosComponent_td_123_ng_container_1_Template, 5, 10, "ng-container", 96);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", element_r10.TubeType);
  }
}
function DosComponent_th_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Tat, " ");
  }
}
function DosComponent_td_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 94)(1, "span", 98);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", element_r11.TAT, "");
  }
}
function DosComponent_th_128_span_1_Template(rf, ctx) {
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
function DosComponent_th_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 99);
    \u0275\u0275template(1, DosComponent_th_128_span_1_Template, 2, 1, "span", 100);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isViewDOSPrice);
  }
}
function DosComponent_td_129_span_1_Template(rf, ctx) {
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
function DosComponent_td_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 94);
    \u0275\u0275template(1, DosComponent_td_129_span_1_Template, 2, 1, "span", 100);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isViewDOSPrice);
  }
}
function DosComponent_th_131_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 99);
  }
}
function DosComponent_td_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 101);
    \u0275\u0275element(1, "img", 102);
    \u0275\u0275elementEnd();
  }
}
function DosComponent_td_134_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 116);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const meth_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(meth_r13.methodology);
  }
}
function DosComponent_td_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 103)(1, "div", 104)(2, "div", 105)(3, "div", 106)(4, "div", 10)(5, "table", 107)(6, "tr", 108);
    \u0275\u0275element(7, "th");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "tr")(9, "td")(10, "div", 109)(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 110);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "td")(16, "div", 111)(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 112);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "td")(22, "div", 113)(23, "strong");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, DosComponent_td_134_span_25_Template, 2, 1, "span", 114);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(26, "td");
    \u0275\u0275elementStart(27, "td")(28, "div", 115)(29, "strong");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 112);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(33, "td")(34, "td");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("colspan", ctx_r2.columnsToDisplay.length);
    \u0275\u0275advance();
    \u0275\u0275property("@detailExpand", element_r14 === ctx_r2.expandedElement || ctx_r2.allRowsExpanded ? "expanded" : "collapsed");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction6(11, _c34, element_r14.Menu === "Blue", element_r14.Menu === "Green", element_r14.Menu === "Orange", element_r14.Menu === "Equine", element_r14.Menu === "AvianExotic", element_r14.Menu === "AllOther"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Component, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", element_r14.Component, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Notes, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", element_r14.Notes, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Methodology, ":");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", element_r14.Methodologies);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.label.Lab, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", element_r14.LabName, " ");
  }
}
function DosComponent_tr_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 117);
  }
}
function DosComponent_tr_136_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 118);
    \u0275\u0275listener("click", function DosComponent_tr_136_Template_tr_click_0_listener() {
      const element_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.expandCard(element_r16));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("example-expanded-row", ctx_r2.expandedElement === element_r16);
  }
}
function DosComponent_tr_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 119);
  }
}
function DosComponent_tbody_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tbody", 120)(1, "tr")(2, "td");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.label.Norecordsfound);
  }
}
function DosComponent_mat_option_159_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 121);
    \u0275\u0275element(1, "span", 73);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const filter_r19 = ctx.$implicit;
    \u0275\u0275property("value", filter_r19.Color);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction6(3, _c24, filter_r19.Color === "Blue", filter_r19.Color === "Green", filter_r19.Color === "Orange", filter_r19.Color === "Equine", filter_r19.Color === "AvianExotic", filter_r19.Color === "AllOther"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(filter_r19.Name);
  }
}
function DosComponent_mat_option_166_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 121);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const filter_r20 = ctx.$implicit;
    \u0275\u0275property("value", filter_r20.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(filter_r20.Name);
  }
}
var DosComponent = class _DosComponent {
  constructor(commonService, userService, fb, sidemenuService, headerService, patientService, labelService, dataService, modalService, sidefilterService) {
    this.commonService = commonService;
    this.userService = userService;
    this.fb = fb;
    this.sidemenuService = sidemenuService;
    this.headerService = headerService;
    this.patientService = patientService;
    this.labelService = labelService;
    this.dataService = dataService;
    this.modalService = modalService;
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
    this.userId = localStorage.authDetails ? JSON.parse(localStorage.authDetails).Id : void 0;
    this.start = 0;
    this.limit = 15;
    this.end = this.limit + this.start;
    this.selectedRowIndex = null;
    this.isViewDOSPrice = this.dataService.appData.authDetails["IsViewDOSPrice"];
    this.sidemenuService.selectedModuleId = EnmModule.dos;
    this.labelService.getDosScreenLabels();
    this.label = this.labelService.dosScreen;
    this.setDefaultFilter();
    this.CheckForm = fb.group({
      checkfavastatus: [null]
    });
  }
  ngOnInit() {
    if (localStorage.getItem("alert-popup") == "true") {
      this.modalService.open(AlertMessageComponent, {
        centered: true,
        backdrop: "static",
        scrollable: false
      });
    }
    this.getDosfilter();
    this.getUsersettings();
    this.apply(this.originData, null);
  }
  onTableScroll(e) {
    const tableViewHeight = e.target.offsetHeight;
    const tableScrollHeight = e.target.scrollHeight;
    const scrollLocation = e.target.scrollTop;
    const buffer = 200;
    const limit = tableScrollHeight - tableViewHeight - buffer;
    if (scrollLocation > limit) {
      const data = this.getTableData(this.start, this.end);
      this.dataSource.data = this.dataSource.data.concat(data);
      this.updateIndex();
    }
  }
  getTableData(start, end) {
    return this.originData.filter((value, index) => index >= start && index < end);
  }
  updateIndex() {
    this.start = this.end;
    this.end = this.limit + this.start;
  }
  onDataSort() {
    const scrollabe = document.getElementById("dashboard-scrollabe");
    scrollabe.scrollTop = 0;
  }
  bindDataSource() {
    this.dataSource = new MatLegacyTableDataSource(this.originData);
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
  /** required */
  toggle() {
    this.allRowsExpanded = !this.allRowsExpanded;
    this.expandedElement = null;
  }
  // changeValue(value) {
  //     //    console.log(value)
  // }
  setClickedtrueRow(element) {
    this.selectedRow = element;
    this.dataSource.data.forEach((data) => {
      if (data.TestId == element.TestId) {
        data.IsFavourite = !data.IsFavourite;
      }
    });
    const fav = {
      TestId: element.TestId,
      UserGuid: this.headerService.loginUserGuid,
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
      this.originData = data.ResponseData;
      this.bindDataSource();
    }, (err) => {
      console.log(JSON.stringify(err));
      this.commonService.showCommonToastrError();
    });
  }
  getDosTestData() {
    const dosfields = {
      SearchText: this.searchValue,
      ClassName: this.selectedClassdata,
      Menu: this.selectedmenudata,
      IsOrder: false,
      UserGuid: this.headerService.loginUserGuid,
      IsFavourite: this.CheckForm.controls["checkfavastatus"].value
    };
    this.commonService.GetDOSTestdata(dosfields).subscribe((data) => {
      this.originData = data.ResponseData;
      this.bindDataSource();
    });
  }
  apply(selectedmenu, selectedClass) {
    if (selectedmenu.length > 100) {
      selectedmenu = this.selectedmenufor;
    }
    if (selectedmenu == "Filter By Menu") {
      selectedmenu = "";
    }
    if (selectedClass == "Filter By Class") {
      selectedClass = "";
    }
    const selectedmenuA = selectedmenu.toString();
    this.selectedmenudata = selectedmenuA;
    this.selectedClassdata = selectedClass;
    this.getDosTestData();
  }
  clraeAll() {
    if (this.searchValue != void 0 || this.selectedmenudata != "" || this.selectedClassdata != null || this.CheckForm.controls["checkfavastatus"].value != null) {
      this.searchValue = void 0;
      this.selectedmenudata = "";
      this.selectedClassdata = null;
      this.CheckForm.controls["checkfavastatus"].setValue(null);
      this.CheckForm.reset();
      this.selectedMenu = "Filter By Menu";
      this.selected = "Filter By Class";
      this.selectedmenufor = "Filter By Menu";
      this.getDosTestData();
    }
  }
  getUsersettings() {
    this.userService.getUserSettingDetails(this.headerService.loginUserGuid, localStorage.businessGuid).subscribe((data) => {
      this.dosprice = data.ResponseData;
    });
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
      return new (__ngFactoryType__ || _DosComponent)(\u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(SidemenuService), \u0275\u0275directiveInject(HeaderService), \u0275\u0275directiveInject(PatientService), \u0275\u0275directiveInject(LabelService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(SidefilterService));
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
    }, decls: 175, vars: 33, consts: [["drawer", ""], ["selectedmenu", ""], ["selectedClass", ""], ["hasBackdrop", "true", 1, "example-container1"], ["mode", "over", "position", "end", 1, "example-sidenav", "sidefilter", "right-filter"], [1, "example-sidenav-content", "w-100", "sidefilter", "dashboard"], [1, "left-block"], [1, "p-0"], [1, "mt-0"], [1, "d-flex", "justify-content-between", "pt-3", "pl-3", "pr-3", "align-items-center", "toprow"], [1, "w-100"], [1, "text-center", "m-0", "head1", "w-100"], [1, "d-flex1", "d-none"], [1, "ipadfiler"], ["type", "button", "mat-button", "", 1, "pr-0", 3, "click"], ["src", "../../../assets/img/filterIcon@2x.png", "alt", ""], [1, "d-flex", "align-items-center", "tube_type_key"], [1, "tooltip"], [1, "tooltext"], ["src", "../../../assets/img/info@2x.png", "alt", ""], [1, "tooltiptext"], [1, "tool_header"], [1, "tool_text", "p-3"], [1, "d-flex", "justify-content-start", "align-items-center", "mb-2"], [1, "dot", "sst"], [1, "abbre"], [1, "dot", "rrt"], [1, "dot", "ltt"], [1, "dot", "btt"], [1, "dot", "grntt"], [1, "dot", "f"], [1, "dot", "u"], [1, "micro", "msst"], [1, "micro", "mrtt"], [1, "micro", "mltt"], [1, "micro", "mgrntt"], [1, "d-flex", "ipadfiler"], [1, "p-0", "pt-2", "cust-postion"], [1, "example-container", "pt-0"], ["mat-raised-button", "", 1, "closeall", 3, "click", "ngClass"], ["src", "../../../assets/img/expandall.png ", "alt", ""], ["id", "dashboard-scrollabe", 1, "usermangemt", 3, "scroll"], ["mat-table", "", "multiTemplateDataRows", "", "summary", "", "matSort", "", 1, "dashboard-table", 3, "dataSource"], ["matColumnDef", "TestName"], ["mat-header-cell", "", "style", "padding-left: 20px", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "id", "first_block", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "Class"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "SampleRequirements"], ["matColumnDef", "TubeType"], ["matColumnDef", "TAT"], ["matColumnDef", "Price"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", " "], ["mat-cell", "", "id", "arrow_block", 4, "matCellDef"], ["matColumnDef", "expandedDetail"], ["id", "expanded_td", "mat-cell", "", "td", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], [1, "noresult"], ["class", "norecord", 4, "ngIf"], [1, "right-filter", "pl-0"], [1, "pl-4", "pr-4", "do_filter_wrapper"], [1, "d-flex", "justify-content-between", "mt-4"], [1, "filter-head"], [1, "clrall", 3, "click"], ["appearance", "outline", "floatLabel", "always"], ["matPrefix", "", 2, "cursor", "pointer", 3, "click"], ["src", "../../../../assets/img/search-icon.png", "alt", "searchicon"], ["type", "text", "matInput", "", "maxlength", "20", "placeholder", "Search", 3, "ngModelChange", "keyup.enter", "ngModel"], ["id", "filer_by_menu", 1, "mt-2"], [3, "ngClass"], [3, "valueChange", "value"], ["value", "Filter By Menu"], [3, "value", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["value", "Filter By Class"], [1, "mt-3", "del_doc", "del_do"], [3, "formGroup"], ["formControlName", "checkfavastatus", "value", "checked", 1, "example-margin"], [1, "mt-3", "mb-3", "d-flex", "justify-content-center"], ["mat-raised-button", "", "color", "warn", 1, "w-25", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", 2, "padding-left", "20px"], ["mat-cell", "", "id", "first_block", 3, "ngClass"], [1, "d-flex"], ["class", "mr-2 star_wrapper", 3, "click", 4, "ngIf"], [1, "d-flex", "flex-column"], [1, "mr-1"], [1, "mr-2", "star_wrapper", 3, "click"], ["src", "../../../assets/img/star.png", "alt", "star", "width", "18"], ["src", "../../../assets/img/unstar.png", "alt", "unstar", "width", "18"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "bluetext"], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "mb-1"], [1, "tat_text"], ["mat-header-cell", ""], [4, "ngIf"], ["mat-cell", "", "id", "arrow_block"], ["src", "../../../assets/img/down-gray@2x.png", "alt", "down-gray"], ["id", "expanded_td", "mat-cell", "", "td", ""], [1, "example-element-detail"], [1, "row", "py-0", "card-block", "w-100"], [1, "d-flex", "w-100"], ["id", "inner_table", "summary", "", 3, "ngClass"], [2, "display", "none"], [1, "d-flex", "pr-3", "flex-column", "two", "text-left", "pl-5", "comp"], [1, "comp_text", "desc_text"], [1, "d-flex", "pr-3", "flex-column", "three", "text-left", "notes_block"], [1, "desc_text"], [1, "d-flex", "pr-3", "flex-column", "four", "text-left"], ["class", "desc_textmethodology", 4, "ngFor", "ngForOf"], [1, "d-flex", "pr-3", "flex-column", "six", "text-left"], [1, "desc_textmethodology"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-row", "", 1, "example-detail-row"], [1, "norecord"], [3, "value"]], template: function DosComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "mat-drawer-container", 3);
        \u0275\u0275element(1, "mat-drawer", 4, 0);
        \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "mat-card", 7)(6, "div", 8)(7, "div", 9)(8, "span", 10)(9, "h5", 11);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "span", 12)(12, "span", 13)(13, "button", 14);
        \u0275\u0275listener("click", function DosComponent_Template_button_click_13_listener() {
          \u0275\u0275restoreView(_r1);
          const drawer_r2 = \u0275\u0275reference(2);
          return \u0275\u0275resetView(drawer_r2.toggle());
        });
        \u0275\u0275element(14, "img", 15);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "span", 16)(16, "div", 17)(17, "span", 18);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "img", 19);
        \u0275\u0275elementStart(20, "div", 20)(21, "div", 21);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 22)(24, "div", 23);
        \u0275\u0275element(25, "span", 24);
        \u0275\u0275elementStart(26, "div")(27, "span", 25);
        \u0275\u0275text(28, "SST");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span");
        \u0275\u0275text(30, "Serum Separator");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 23);
        \u0275\u0275element(32, "span", 26);
        \u0275\u0275elementStart(33, "div")(34, "span", 25);
        \u0275\u0275text(35, "RTT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "span");
        \u0275\u0275text(37, "Serum, No Gel");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "div", 23);
        \u0275\u0275element(39, "span", 27);
        \u0275\u0275elementStart(40, "div")(41, "span", 25);
        \u0275\u0275text(42, "LTT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span");
        \u0275\u0275text(44, "EDTA Whole Blood");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "div", 23);
        \u0275\u0275element(46, "span", 28);
        \u0275\u0275elementStart(47, "div")(48, "span", 25);
        \u0275\u0275text(49, "BTT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "span");
        \u0275\u0275text(51, "Citrated Blood");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(52, "div", 23);
        \u0275\u0275element(53, "span", 29);
        \u0275\u0275elementStart(54, "div")(55, "span", 25);
        \u0275\u0275text(56, "GRNTT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "span");
        \u0275\u0275text(58, "Heparinized Blood");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(59, "div", 23);
        \u0275\u0275element(60, "span", 30);
        \u0275\u0275elementStart(61, "div")(62, "span", 25);
        \u0275\u0275text(63, "F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "span");
        \u0275\u0275text(65, "Feces");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(66, "div", 23);
        \u0275\u0275element(67, "span", 31);
        \u0275\u0275elementStart(68, "div")(69, "span", 25);
        \u0275\u0275text(70, "U");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "span");
        \u0275\u0275text(72, "Urine");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(73, "div", 23);
        \u0275\u0275element(74, "span", 32);
        \u0275\u0275elementStart(75, "div")(76, "span", 25);
        \u0275\u0275text(77, "M-SST");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "span");
        \u0275\u0275text(79, "Micro Serum Separator");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(80, "div", 23);
        \u0275\u0275element(81, "span", 33);
        \u0275\u0275elementStart(82, "div")(83, "span", 25);
        \u0275\u0275text(84, "M-RTT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "span");
        \u0275\u0275text(86, "Micro Serum, No Gel");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(87, "div", 23);
        \u0275\u0275element(88, "span", 34);
        \u0275\u0275elementStart(89, "div")(90, "span", 25);
        \u0275\u0275text(91, "M-LTT ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "span");
        \u0275\u0275text(93, "Micro EDTA Whole Blood");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(94, "div", 23);
        \u0275\u0275element(95, "span", 35);
        \u0275\u0275elementStart(96, "div")(97, "span", 25);
        \u0275\u0275text(98, "M-GRNTT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "span");
        \u0275\u0275text(100, "Micro Heparinized Blood (Lithium)");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(101, "span", 36)(102, "span", 13)(103, "button", 14);
        \u0275\u0275listener("click", function DosComponent_Template_button_click_103_listener() {
          \u0275\u0275restoreView(_r1);
          const drawer_r2 = \u0275\u0275reference(2);
          return \u0275\u0275resetView(drawer_r2.toggle());
        });
        \u0275\u0275element(104, "img", 15);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(105, "div", 37)(106, "div")(107, "div", 38)(108, "button", 39);
        \u0275\u0275listener("click", function DosComponent_Template_button_click_108_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggle());
        });
        \u0275\u0275element(109, "img", 40);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "div", 41);
        \u0275\u0275listener("scroll", function DosComponent_Template_div_scroll_110_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onTableScroll($event));
        });
        \u0275\u0275elementStart(111, "table", 42);
        \u0275\u0275elementContainerStart(112, 43);
        \u0275\u0275template(113, DosComponent_th_113_Template, 2, 1, "th", 44)(114, DosComponent_td_114_Template, 11, 12, "td", 45);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(115, 46);
        \u0275\u0275template(116, DosComponent_th_116_Template, 2, 1, "th", 47)(117, DosComponent_td_117_Template, 3, 1, "td", 48);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(118, 49);
        \u0275\u0275template(119, DosComponent_th_119_Template, 2, 1, "th", 47)(120, DosComponent_td_120_Template, 2, 1, "td", 48);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(121, 50);
        \u0275\u0275template(122, DosComponent_th_122_Template, 2, 1, "th", 47)(123, DosComponent_td_123_Template, 2, 1, "td", 48);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(124, 51);
        \u0275\u0275template(125, DosComponent_th_125_Template, 2, 1, "th", 47)(126, DosComponent_td_126_Template, 3, 1, "td", 48);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(127, 52);
        \u0275\u0275template(128, DosComponent_th_128_Template, 2, 1, "th", 53)(129, DosComponent_td_129_Template, 2, 1, "td", 48);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(130, 54);
        \u0275\u0275template(131, DosComponent_th_131_Template, 1, 0, "th", 53)(132, DosComponent_td_132_Template, 2, 0, "td", 55);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(133, 56);
        \u0275\u0275template(134, DosComponent_td_134_Template, 35, 18, "td", 57);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(135, DosComponent_tr_135_Template, 1, 0, "tr", 58)(136, DosComponent_tr_136_Template, 1, 2, "tr", 59)(137, DosComponent_tr_137_Template, 1, 0, "tr", 60);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "div", 61);
        \u0275\u0275template(139, DosComponent_tbody_139_Template, 4, 1, "tbody", 62);
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(140, "div", 63)(141, "div", 64)(142, "div")(143, "div", 65)(144, "span", 66);
        \u0275\u0275text(145);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "a", 67);
        \u0275\u0275listener("click", function DosComponent_Template_a_click_146_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.clraeAll());
        });
        \u0275\u0275text(147);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(148, "mat-form-field", 68)(149, "span", 69);
        \u0275\u0275listener("click", function DosComponent_Template_span_click_149_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.searchDosTestData());
        });
        \u0275\u0275element(150, "img", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "input", 71);
        \u0275\u0275twoWayListener("ngModelChange", function DosComponent_Template_input_ngModelChange_151_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.searchValue, $event) || (ctx.searchValue = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("keyup.enter", function DosComponent_Template_input_keyup_enter_151_listener() {
          \u0275\u0275restoreView(_r1);
          const selectedmenu_r17 = \u0275\u0275reference(156);
          const selectedClass_r18 = \u0275\u0275reference(163);
          return \u0275\u0275resetView(ctx.apply(selectedmenu_r17.value, selectedClass_r18.value));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(152, "div", 72)(153, "mat-form-field", 68);
        \u0275\u0275element(154, "span", 73);
        \u0275\u0275elementStart(155, "mat-select", 74, 1);
        \u0275\u0275twoWayListener("valueChange", function DosComponent_Template_mat_select_valueChange_155_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selectedMenu, $event) || (ctx.selectedMenu = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(157, "mat-option", 75);
        \u0275\u0275text(158);
        \u0275\u0275elementEnd();
        \u0275\u0275template(159, DosComponent_mat_option_159_Template, 4, 10, "mat-option", 76);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(160, "div", 77)(161, "mat-form-field", 68)(162, "mat-select", 74, 2);
        \u0275\u0275twoWayListener("valueChange", function DosComponent_Template_mat_select_valueChange_162_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.selected, $event) || (ctx.selected = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(164, "mat-option", 78);
        \u0275\u0275text(165);
        \u0275\u0275elementEnd();
        \u0275\u0275template(166, DosComponent_mat_option_166_Template, 2, 2, "mat-option", 76);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(167, "div", 79)(168, "form", 80)(169, "div")(170, "mat-checkbox", 81);
        \u0275\u0275text(171);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(172, "div", 82)(173, "button", 83);
        \u0275\u0275listener("click", function DosComponent_Template_button_click_173_listener() {
          \u0275\u0275restoreView(_r1);
          const selectedmenu_r17 = \u0275\u0275reference(156);
          const selectedClass_r18 = \u0275\u0275reference(163);
          return \u0275\u0275resetView(ctx.apply(selectedmenu_r17.value, selectedClass_r18.value));
        });
        \u0275\u0275text(174);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate1(" ", ctx.label.DirectoryOfServices, "");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", ctx.label.TubeTypeKey, "");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.label.DirectoryOfServicesSampleKey, " ");
        \u0275\u0275advance(86);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(23, _c06, ctx.allRowsExpanded));
        \u0275\u0275advance(3);
        \u0275\u0275property("dataSource", ctx.dataSource);
        \u0275\u0275advance(24);
        \u0275\u0275property("matHeaderRowDef", ctx.columnsToDisplay)("matHeaderRowDefSticky", true);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.columnsToDisplay);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(25, _c16));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.dataSource === null || ctx.dataSource.data.length === 0);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", ctx.label.Filters, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.label.ClearAll);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchValue);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction6(26, _c24, ctx.selectedMenu === "Blue", ctx.selectedMenu === "Green", ctx.selectedMenu === "Orange", ctx.selectedMenu === "Equine", ctx.selectedMenu === "AvianExotic", ctx.selectedMenu === "AllOther"));
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("value", ctx.selectedMenu);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.label.FilterByMenu);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.filterMenuData);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("value", ctx.selected);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.label.FilterByClass);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.filterClassData);
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.CheckForm);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.label.Favorites, "");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.label.Apply, " ");
      }
    }, dependencies: [NgClass, NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, FormGroupDirective, FormControlName, MatLegacyFormField, MatLegacyPrefix, MatLegacyInput, MatLegacyButton, MatLegacyCheckbox, MatLegacyCard, MatLegacySelect, MatLegacyOption, MatDrawer, MatDrawerContainer, MatLegacyTable, MatLegacyHeaderCellDef, MatLegacyHeaderRowDef, MatLegacyColumnDef, MatLegacyCellDef, MatLegacyRowDef, MatLegacyHeaderCell, MatLegacyCell, MatLegacyHeaderRow, MatLegacyRow, MatSort, MatSortHeader], styles: ['\n\n.g-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fd6400;\n  border-color: #fd6400;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n}\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.btn-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, \n.btn-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, \n.show[_ngcontent-%COMP%]    > .btn-secondary.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fd6400;\n  border-color: #fd6400;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  min-width: 124px;\n}\n.btn-group-toggle[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #a1a1a1;\n  border-color: transparent;\n  border-radius: 5px !important;\n  padding: 5px 8px;\n  font-size: 13.5px;\n  font-weight: 400;\n}\n.example-container[_ngcontent-%COMP%] {\n  padding: 12px;\n  overflow: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.select-outer[_ngcontent-%COMP%] {\n  float: right;\n}\n.heading[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 400;\n}\n.color1[_ngcontent-%COMP%] {\n  background: #0eab1c;\n  height: 28px !important;\n  display: inline-block;\n  align-items: flex-end;\n  vertical-align: middle;\n  width: 5px;\n  margin-right: 17px;\n}\n.sort[_ngcontent-%COMP%] {\n  width: 170px;\n  float: right;\n  font-family: "GothamNarrowBold", sans-serif;\n  font-weight: bold;\n}\n.sort-text[_ngcontent-%COMP%] {\n  min-width: 70px;\n  font-size: 11px;\n  margin-right: 5px;\n  text-align: right;\n}\n.sort[_ngcontent-%COMP%]   .mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 1px 2px 6px 1px !important;\n  font-size: 12px;\n}\n.sort[_ngcontent-%COMP%]   .mat-raised-button.mat-warn[_ngcontent-%COMP%] {\n  background-color: #fd6400;\n}\n.right-filter[_ngcontent-%COMP%]   .mat-raised-button.mat-warn[_ngcontent-%COMP%] {\n  box-shadow: 0 0 6px 1px rgba(255, 100, 0, 0.29) !important;\n  background-color: #ff6400 !important;\n  min-width: 161px;\n}\n.any-src[_ngcontent-%COMP%] {\n  padding-right: 16px;\n  text-align: left;\n  white-space: nowrap;\n}\n.synch[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-right: 15px;\n  font-family: "GothamNarrowBold", sans-serif !important;\n}\n.all[_ngcontent-%COMP%] {\n  margin-left: 13px;\n  font-weight: bold;\n  font-size: 14px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.head1[_ngcontent-%COMP%] {\n  text-align: center !important;\n  font-size: 17px;\n  color: #000;\n}\n.patient-name[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #0075bc;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.example-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(2), \n.example-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(2).example-container   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(3), \n.example-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(3) {\n  min-width: 98px !important;\n}\n.imgouter[_ngcontent-%COMP%] {\n  width: 42px;\n  text-align: center;\n}\n.norecord[_ngcontent-%COMP%] {\n  width: 99.1% !important;\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  border: 1px solid #ccc9;\n  border-top: transparent;\n  background-color: #fbfbfb;\n}\ntd.mat-cell[_ngcontent-%COMP%]:last-of-type, \ntd.mat-footer-cell[_ngcontent-%COMP%]:last-of-type, \nth.mat-header-cell[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 23px;\n}\n.example-container[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, \n.example-container[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  max-width: 150px;\n  width: 45px;\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n  position: relative;\n  top: -12px;\n  box-shadow: 0 8px 12px 0 rgb(0 0 0 / 19%) !important;\n}\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n  padding: 12px 0;\n}\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  justify-content: space-around;\n}\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.card-complete[_ngcontent-%COMP%] {\n  border-left: 5px solid #0eab1c;\n}\n.completed[_ngcontent-%COMP%] {\n  border-left: 5px solid #0eab1c;\n}\n.pending[_ngcontent-%COMP%] {\n  border-left: 5px solid #969696;\n}\n.cancelled[_ngcontent-%COMP%] {\n  border-left: 5px solid red;\n}\n.mat-column-expandedDetail[_ngcontent-%COMP%] {\n  background: #f5f7f9;\n}\n.card-head[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: "GothamNarrowBold", sans-serif;\n  font-weight: bold;\n  width: 90%;\n  word-break: break-word;\n  white-space: break-spaces;\n  text-align: left;\n  line-height: 16px;\n}\n.card-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  min-width: 62px;\n  word-break: break-word;\n  white-space: normal;\n  text-align: left;\n  max-width: 75px;\n}\n.card-block[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  margin-bottom: 13px;\n  padding: 12px;\n  height: 100%;\n  border-radius: 5px !important;\n  padding-bottom: 0;\n}\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   img[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: rotate(-90deg);\n  transition: all 0.1s;\n  position: absolute;\n  top: 16px;\n  right: 12px;\n}\n.example-element-row.example-expanded-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   img[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: rotate(0deg);\n}\n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%]:nth-of-type(1), \n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%]:nth-of-type(2), \n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%]:nth-of-type(3) {\n  margin-bottom: 10px;\n}\n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.card-arrow[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #0072ce !important;\n}\n.dashboard-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-radius: 5px 0 0 0px !important;\n}\n.dashboard-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-radius: 0px 5px 0 0px !important;\n}\n.cdk-column-expandedDetail[_ngcontent-%COMP%] {\n  padding-right: 0 !important;\n}\n.dashboard-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, \ntr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 14px !important;\n}\n.dashboard-table[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.dashboard-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:nth-child(4n+1) {\n  background-color: #fbfbfb !important;\n}\n.noresult[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(1) {\n  font-family: "GothamNarrowBold", sans-serif;\n  font-size: 15px;\n  margin-top: 20px;\n}\n.noresult[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(2) {\n  font-size: 15px;\n  margin-top: 20px;\n  color: #3e3e3e;\n}\n.noresult[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #3e3e3e;\n}\n.noresult[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 18px;\n}\n.closeall[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(0deg);\n  transition: all 0.1s;\n}\n.closeall.expandedall[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(-180deg);\n}\n.closeall[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 999;\n  top: 36px;\n  right: 37px;\n  background: transparent;\n  min-width: 34px;\n  padding: 0;\n}\n.cust-postion[_ngcontent-%COMP%] {\n  position: relative;\n}\n.example-container1[_ngcontent-%COMP%] {\n  height: calc(100vh - 90px);\n  margin-top: 70px;\n  position: relative;\n  z-index: 0;\n}\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.dashboard-wrapper[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n}\n.ipadfiler[_ngcontent-%COMP%] {\n  display: none;\n}\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.dvn_name[_ngcontent-%COMP%] {\n  width: auto !important;\n}\n@media (max-width: 800px) {\n  .dashboard-wrapper[_ngcontent-%COMP%] {\n    padding-left: 12px !important;\n    padding-right: 12px !important;\n  }\n  .btn-secondary[_ngcontent-%COMP%] {\n    min-width: 106px;\n  }\n  .toprow[_ngcontent-%COMP%] {\n    flex-direction: row;\n    padding-right: 0 !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .example-sidenav[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .mat-card[_ngcontent-%COMP%] {\n    border-radius: 10px !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 48px;\n    padding: 0;\n    margin-left: 10px;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {\n  .dashboard-wrapper[_ngcontent-%COMP%] {\n    padding-left: 12px !important;\n    padding-right: 12px !important;\n  }\n  .btn-secondary[_ngcontent-%COMP%] {\n    min-width: 106px;\n  }\n  .toprow[_ngcontent-%COMP%] {\n    flex-direction: row;\n    padding-right: 0 !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .example-sidenav[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .mat-card[_ngcontent-%COMP%] {\n    border-radius: 10px !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 48px;\n    padding: 0;\n    margin-left: 10px;\n  }\n}\n.filter-txt[_ngcontent-%COMP%] {\n  position: relative;\n  height: 22px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.cros-btn[_ngcontent-%COMP%] {\n  position: relative;\n  right: 0;\n  top: 0;\n  height: 30px !important;\n  width: 30px;\n  margin-left: 6px;\n}\n.g-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fd6400;\n  border-color: #fd6400;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n}\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87);\n  margin-right: 10px;\n  margin-left: 10px;\n  box-shadow: 0 0 12px 0 rgb(0 0 0 / 19%) !important;\n  border-radius: 6px !important;\n  margin-bottom: 11px;\n}\n.mat-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.btn-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active, \n.btn-secondary[_ngcontent-%COMP%]:not(:disabled):not(.disabled):active, \n.show[_ngcontent-%COMP%]    > .btn-secondary.dropdown-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #fd6400;\n  border-color: #fd6400;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  min-width: 124px;\n}\n.btn-group-toggle[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #a1a1a1;\n  border-color: transparent;\n  border-radius: 5px !important;\n  padding: 5px 8px;\n  font-size: 13.5px;\n  font-weight: 400;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.select-outer[_ngcontent-%COMP%] {\n  float: right;\n}\n.heading[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 400;\n}\n.color1[_ngcontent-%COMP%] {\n  background: #0eab1c;\n  height: 28px !important;\n  display: inline-block;\n  align-items: flex-end;\n  vertical-align: middle;\n  width: 5px;\n  margin-right: 17px;\n}\n.sort[_ngcontent-%COMP%] {\n  width: 170px;\n  float: right;\n  font-family: "GothamNarrowBold", sans-serif;\n  font-weight: bold;\n}\n.sort-text[_ngcontent-%COMP%] {\n  min-width: 70px;\n  font-size: 11px;\n  margin-right: 5px;\n  text-align: right;\n}\n.sort[_ngcontent-%COMP%]   .mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 1px 2px 6px 1px !important;\n  font-size: 12px;\n}\n.sort[_ngcontent-%COMP%]   .mat-raised-button.mat-warn[_ngcontent-%COMP%] {\n  background-color: #fd6400;\n}\n.right-filter[_ngcontent-%COMP%]   .mat-raised-button.mat-warn[_ngcontent-%COMP%] {\n  box-shadow: 0 0 6px 1px rgba(255, 100, 0, 0.29) !important;\n  background-color: #ff6400 !important;\n  min-width: 161px;\n}\n.any-src[_ngcontent-%COMP%] {\n  padding-right: 16px;\n  text-align: left;\n  white-space: nowrap;\n}\n.synch[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-right: 15px;\n  font-family: "GothamNarrowBold", sans-serif !important;\n}\n.all[_ngcontent-%COMP%] {\n  margin-left: 13px;\n  font-weight: bold;\n  font-size: 14px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.head1[_ngcontent-%COMP%] {\n  text-align: center !important;\n  font-size: 17px;\n  color: #000;\n}\n.patient-name[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #0075bc;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.example-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(2), \n.example-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(2).example-container   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(3), \n.example-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(3) {\n  min-width: 98px !important;\n}\n.imgouter[_ngcontent-%COMP%] {\n  width: 42px;\n  text-align: center;\n}\n.norecord[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  border: 1px solid #ccc9;\n  border-top: transparent;\n  background-color: #fbfbfb;\n}\ntd.mat-cell[_ngcontent-%COMP%]:last-of-type, \ntd.mat-footer-cell[_ngcontent-%COMP%]:last-of-type, \nth.mat-header-cell[_ngcontent-%COMP%]:last-of-type {\n  padding-right: 23px;\n}\n.example-container[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, \n.example-container[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  max-width: 150px;\n  width: 45px;\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n}\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.card-complete[_ngcontent-%COMP%] {\n  border-left: 5px solid #0eab1c;\n}\n.completed[_ngcontent-%COMP%] {\n  border-left: 5px solid #0eab1c;\n}\n.pending[_ngcontent-%COMP%] {\n  border-left: 5px solid #969696;\n}\n.cancelled[_ngcontent-%COMP%] {\n  border-left: 5px solid red;\n}\n.mat-column-expandedDetail[_ngcontent-%COMP%] {\n  background: #f5f7f9;\n}\n.card-head[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-family: "GothamNarrowBold", sans-serif;\n  font-weight: bold;\n  width: 90%;\n  word-break: break-word;\n  white-space: break-spaces;\n  text-align: left;\n  line-height: 16px;\n}\n.card-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  min-width: 62px;\n  word-break: break-word;\n  white-space: normal;\n  text-align: left;\n  max-width: 75px;\n}\n.card-block[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  margin-bottom: 13px;\n  padding: 12px;\n  height: 100%;\n  border-radius: 5px !important;\n  padding-bottom: 0;\n}\n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%]:nth-of-type(1), \n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%]:nth-of-type(2), \n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%]:nth-of-type(3) {\n  margin-bottom: 10px;\n}\n.card-block[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.card-arrow[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #0072ce !important;\n}\n.dashboard-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-radius: 5px 0 0 0px !important;\n}\n.dashboard-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-radius: 0px 5px 0 0px !important;\n}\n.cdk-column-expandedDetail[_ngcontent-%COMP%] {\n  padding-right: 0 !important;\n}\n.dashboard-table[_ngcontent-%COMP%]   .col-sm-4[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.dashboard-table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:nth-child(4n+1) {\n  background-color: #fbfbfb !important;\n}\n.noresult[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(1) {\n  font-family: "GothamNarrowBold", sans-serif;\n  font-size: 15px;\n  margin-top: 20px;\n}\n.noresult[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(2) {\n  font-size: 15px;\n  margin-top: 20px;\n  color: #3e3e3e;\n}\n.noresult[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #3e3e3e;\n}\n.noresult[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 18px;\n}\n.closeall[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(0deg);\n  transition: all 0.1s;\n}\n.closeall.expandedall[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: rotate(-180deg);\n}\n.closeall[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 999;\n  top: 12px;\n  right: 37px;\n  background: transparent;\n  min-width: 34px;\n  padding: 0;\n}\n.cust-postion[_ngcontent-%COMP%] {\n  position: relative;\n}\n.example-container1[_ngcontent-%COMP%] {\n  height: calc(100vh - 90px);\n  margin-top: 70px;\n  position: relative;\n  z-index: 0;\n}\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.dashboard-wrapper[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n}\n.ipadfiler[_ngcontent-%COMP%] {\n  display: none;\n}\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.dvn_name[_ngcontent-%COMP%] {\n  width: auto !important;\n}\n@media (max-width: 800px) {\n  .dashboard-wrapper[_ngcontent-%COMP%] {\n    padding-left: 12px !important;\n    padding-right: 12px !important;\n  }\n  .btn-secondary[_ngcontent-%COMP%] {\n    min-width: 106px;\n  }\n  .toprow[_ngcontent-%COMP%] {\n    flex-direction: row;\n    padding-right: 0 !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .example-sidenav[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .mat-card[_ngcontent-%COMP%] {\n    border-radius: 10px !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 48px;\n    padding: 0;\n    margin-left: 10px;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {\n  .dashboard-wrapper[_ngcontent-%COMP%] {\n    padding-left: 12px !important;\n    padding-right: 12px !important;\n  }\n  .btn-secondary[_ngcontent-%COMP%] {\n    min-width: 106px;\n  }\n  .toprow[_ngcontent-%COMP%] {\n    flex-direction: row;\n    padding-right: 0 !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .example-sidenav[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .mat-card[_ngcontent-%COMP%] {\n    border-radius: 10px !important;\n  }\n  .ipadfiler[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 48px;\n    padding: 0;\n    margin-left: 10px;\n  }\n}\n.filter-txt[_ngcontent-%COMP%] {\n  position: relative;\n  height: 22px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.cros-btn[_ngcontent-%COMP%] {\n  position: relative;\n  right: 0;\n  top: 0;\n  height: 30px !important;\n  width: 30px;\n  margin-left: 6px;\n}\n.example-action-buttons[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], \n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.heading_bar[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #ed8b00;\n  color: #fff;\n  padding: 8px 10px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.heading_bar[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  width: 60px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  min-width: 290px;\n  padding-right: 12px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 250px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  width: 305px;\n  padding-right: 17px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n  width: 200px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5) {\n  width: 100px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6) {\n  width: 120px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(7) {\n  width: 100px;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\ntd[_ngcontent-%COMP%] {\n  font-family: "gothambook", sans-serif;\n  vertical-align: top;\n}\nth[_ngcontent-%COMP%] {\n  font-family: "GothamNarrowBold", sans-serif !important;\n  font-weight: 100;\n}\n.heading_bar[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.dot-sst[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  border: 4px solid #d91c00;\n}\n.dot-rtt[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #d91c00;\n}\n.dot-urine[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #fed504;\n}\n.dot-btt[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #a0dcee;\n}\n.dot-ltt[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #a884bb;\n}\n.dot-grntt[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #31b44a;\n}\n.dot-feces[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #a36510;\n}\n.dot[_ngcontent-%COMP%] {\n  min-height: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n}\n.dred[_ngcontent-%COMP%] {\n  background: red;\n}\n.dgreen[_ngcontent-%COMP%] {\n  background: green;\n}\n.dred_circle[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid red;\n}\n.mat-accordion[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 216px);\n  overflow: auto;\n}\n.tooltip[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  font-size: 13px;\n  opacity: 1;\n}\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 370px;\n  background-color: #fff;\n  color: #000;\n  text-align: center;\n  border-radius: 6px;\n  padding: 0;\n  position: absolute;\n  z-index: 1;\n  top: -5px;\n  right: 110%;\n  box-shadow: 0 0 12px 0 rgb(0 0 0 / 19%) !important;\n}\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.tool_header[_ngcontent-%COMP%] {\n  background: #0072ce;\n  padding: 16px 0;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  color: #fff;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.tool_text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.abbre[_ngcontent-%COMP%] {\n  width: 92px;\n  display: inline-block;\n  text-align: left;\n  padding-left: 3px;\n}\n.filter-head[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-family: "GothamNarrowBold", sans-serif;\n  color: #585858;\n  margin-bottom: 12px;\n}\n.clrall[_ngcontent-%COMP%] {\n  color: #0072ce !important;\n  font-family: "GothamNarrowBold", sans-serif;\n  cursor: pointer;\n  font-weight: bold;\n}\n.do_srch[_ngcontent-%COMP%] {\n  background: url("./media/search-icon.png");\n  background-repeat: no-repeat;\n  background-size: 15px;\n  padding-left: 24px;\n}\n.do_filter_wrapper[_ngcontent-%COMP%] {\n  height: calc(100vh - 119px);\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n}\n.del_doc[_ngcontent-%COMP%] {\n  font-family: "gothambook", sans-serif;\n}\n.sst[_ngcontent-%COMP%] {\n  border: 4px solid #d91c00;\n}\n.rrt[_ngcontent-%COMP%] {\n  background: #d91c00;\n}\n.ltt[_ngcontent-%COMP%] {\n  background: #a884bb;\n}\n.btt[_ngcontent-%COMP%] {\n  background: #a0dcee;\n}\n.grntt[_ngcontent-%COMP%] {\n  background: #31b44a;\n}\n.f[_ngcontent-%COMP%] {\n  background: #a36510;\n}\n.u[_ngcontent-%COMP%] {\n  background: #fed504;\n}\n.micro[_ngcontent-%COMP%] {\n  min-height: 16px;\n  min-width: 16px;\n  margin-right: 5px;\n}\n.msst[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 4px solid #ff0000;\n}\n.mrtt[_ngcontent-%COMP%] {\n  background: #d91c00;\n}\n.mltt[_ngcontent-%COMP%] {\n  background: #a884bb;\n}\n.mgrntt[_ngcontent-%COMP%] {\n  background: #31b44a;\n}\n.tooltext[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100px;\n  right: 27px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n}\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.tat_text[_ngcontent-%COMP%] {\n  width: 100px;\n  word-wrap: break-word;\n  white-space: normal;\n  display: block;\n  line-height: 15px;\n}\n.desc_text[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  white-space: normal;\n  display: block;\n  line-height: 15px;\n  min-height: 30px;\n}\n.desc_textmethodology[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  white-space: normal;\n  display: block;\n  min-height: 30px;\n  margin: 0px 0px 6px 0px;\n}\n.desc_textmethodology[_ngcontent-%COMP%]:last-child {\n  margin: 0px !important;\n}\n.usermangemt[_ngcontent-%COMP%] {\n  height: calc(100vh - 153px);\n  overflow: auto;\n  padding: 0 12px;\n  padding-left: 5px;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.select-outer[_ngcontent-%COMP%] {\n  float: right;\n}\n.heading[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  font-family: "GothamNarrowBold", sans-serif;\n  font-weight: bold;\n}\n.color1[_ngcontent-%COMP%] {\n  background: red;\n  height: 34px !important;\n  display: inline-block;\n  align-items: flex-end;\n  vertical-align: middle;\n}\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n.links[_ngcontent-%COMP%] {\n  color: #0075bc;\n  cursor: pointer !important;\n  text-decoration: underline;\n}\n.adduser-btn[_ngcontent-%COMP%] {\n  background-color: #ff6400 !important;\n  color: #fff !important;\n  height: 34px !important;\n  padding: 0px 30px !important;\n  border-radius: 6px !important;\n  line-height: 34px;\n}\n.view-user[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  flex: auto;\n  min-width: 0;\n  width: 115px;\n}\n.view-user[_ngcontent-%COMP%]   .mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 4px 6px 7px 4px;\n  margin: 0 !important;\n  top: -2px;\n  font-size: 14px;\n}\n.view-user[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%] {\n  color: #585858;\n}\n.view-user[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  padding: 0;\n  border-radius: 10px 10px 0 0;\n}\n.edit-profile[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  background-color: #9e9e9e;\n  min-width: 125px;\n}\n.save-change[_ngcontent-%COMP%] {\n  background-color: #ff6400;\n  color: #fff;\n  min-width: 125px;\n}\n.editicon[_ngcontent-%COMP%]   .mat-icon-button.mat-accent[_ngcontent-%COMP%] {\n  color: #1072ce !important;\n}\n.deleteicon[_ngcontent-%COMP%]   .mat-icon-button.mat-accent[_ngcontent-%COMP%] {\n  color: #1072ce !important;\n  margin-right: 10px;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, \n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  width: 100px;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(5), \n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(5) {\n  width: 190px;\n  text-align: left;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-of-type(2), \n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-of-type(2) {\n  width: 217px;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: center;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 30px !important;\n}\n.delbtn[_ngcontent-%COMP%] {\n  background: #1072ce !important;\n}\n.norecord[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  border: 1px solid #ccc9;\n  background-color: #fbfbfb;\n}\n.custom-error[_ngcontent-%COMP%] {\n  color: red;\n  display: block;\n  font-size: 11px;\n  position: absolute;\n  left: 26px;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 1em;\n}\ntable.mat-table[_ngcontent-%COMP%] {\n  border-collapse: separate !important;\n  border-spacing: 0 12px !important;\n  position: relative;\n  top: -12px;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 10px !important;\n  border-bottom-right-radius: 10px !important;\n  position: relative;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  padding-left: 67px !important;\n}\n.usermangemt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.19) !important;\n}\n.usermangemt[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-radius: 5px 0 0 0px !important;\n}\n.usermangemt[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-radius: 0px 5px 0 0px !important;\n}\n.name_outer[_ngcontent-%COMP%] {\n  line-height: 16px;\n}\n[hidden][_ngcontent-%COMP%] {\n  display: none !important;\n}\n.msg[_ngcontent-%COMP%] {\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.dosskyBlue[_ngcontent-%COMP%] {\n  border-left: 5px solid #2d68c4;\n}\n.dosGreen[_ngcontent-%COMP%] {\n  border-left: 5px solid #31b44a;\n}\n.dosorange[_ngcontent-%COMP%] {\n  border-left: 5px solid #fed504;\n}\n.dosequine[_ngcontent-%COMP%] {\n  border-left: 5px solid #006271;\n}\n.dosBlue[_ngcontent-%COMP%] {\n  border-left: 5px solid #a0dcee;\n}\n.dosallother[_ngcontent-%COMP%] {\n  border-left: 5px solid #a884bb;\n}\n.dotdosskyBlue[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #2d68c4;\n}\n.dotdosGreen[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #31b44a;\n}\n.dotdosorange[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #fed504;\n}\n.dotdosequine[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #006271;\n}\n.dotdosBlue[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #a0dcee;\n}\n.dotdosallother[_ngcontent-%COMP%] {\n  min-height: 12px;\n  min-width: 12px;\n  border-radius: 50%;\n  margin-right: 9px;\n  display: inline-block;\n  background: #a884bb;\n}\n.star_wrapper[_ngcontent-%COMP%] {\n  width: 40px;\n}\n.comp_text[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n#inner_table[_ngcontent-%COMP%] {\n  border-right: 17px solid transparent;\n  border-collapse: inherit !important;\n  border-spacing: inherit !important;\n  border-bottom-left-radius: 10px !important;\n}\n#inner_table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n  box-shadow: none !important;\n}\n.noresult[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 51px;\n  width: calc(100vw - 397px);\n}\n.tool_text[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n  height: 25px;\n}\n.bluetext[_ngcontent-%COMP%] {\n  color: #000 !important;\n  padding-right: 24px;\n  word-break: break-word;\n  white-space: normal;\n}\n.left-block[_ngcontent-%COMP%] {\n  width: calc(100vw - 366px) !important;\n}\ntable[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.tube_type_key[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px !important;\n}\n/*# sourceMappingURL=dos.component.css.map */'], data: { animation: [
      trigger("detailExpand", [
        state("collapsed", style({ height: "0px", minHeight: "0" })),
        state("expanded", style({ height: "*" })),
        transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))
      ])
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DosComponent, { className: "DosComponent", filePath: "src\\app\\modules\\refrence-lab\\dos\\dos.component.ts", lineNumber: 36 });
})();

// src/app/modules/refrence-lab/refrence-lab.module.ts
var RefrenceLabModule = class _RefrenceLabModule {
  static {
    this.\u0275fac = function RefrenceLabModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RefrenceLabModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RefrenceLabModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
      { provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE] },
      { provide: MAT_DATE_FORMATS, useValue: DateFormats }
    ], imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RoutingModule,
      MatModule,
      NgbModule,
      MatLegacySelectModule,
      HeaderModule,
      SideMenuModule,
      MatLegacyAutocompleteModule,
      MatLegacyFormFieldModule,
      MatLegacyInputModule,
      Ng2SearchPipeModule,
      pipeModule,
      DosPageModule,
      MatLegacyTooltipModule
    ] });
  }
};

export {
  AuthGuard,
  BusinessAdminGuard,
  AuthGuardRotor,
  RefLabGuard,
  ConsultantGuard,
  RefrenceLabModule
};
//# sourceMappingURL=chunk-QTYWUAHD.js.map
