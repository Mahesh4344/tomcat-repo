import {
  ActivatedRoute,
  AlertMessageComponent,
  AlertService,
  CommonModule,
  CommonService,
  DataService,
  DefaultValueAccessor,
  EnmModule,
  EnmUserType,
  EventEmitter,
  FormsModule,
  HeaderService,
  LabelService,
  MatBadge,
  MatIcon,
  MatLegacyButton,
  MatLegacyFormField,
  MatLegacyInput,
  MatLegacyLabel,
  MatLegacyMenu,
  MatLegacyMenuItem,
  MatLegacyMenuTrigger,
  MatLegacyOption,
  MatLegacyPrefix,
  MatLegacySelect,
  MatLegacySuffix,
  MatModule,
  MaxLengthValidator,
  NavigationEnd,
  NgClass,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgbModal,
  NgbTooltip,
  PatientService,
  PendoService,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  SidemenuService,
  Subject,
  ToastrService,
  debounceTime,
  distinctUntilChanged,
  require_moment,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-X5ZGY5K2.js";
import {
  __toESM
} from "./chunk-VTXF2OHE.js";

// src/app/pipe/local-date.pipe.ts
var import_moment = __toESM(require_moment());
var LocalDatePipe = class _LocalDatePipe {
  constructor(dataService, labelService) {
    this.dataService = dataService;
    this.labelService = labelService;
    if (!this.dataService.appState.date.selectedDateFormate) {
      if (this.labelService.userCountryId == 40) {
        this.dateFormate = "MM/DD/YY";
      } else {
        this.dateFormate = "DD/MM/YY";
      }
    } else {
      this.dateFormate = this.dataService.appState.date.selectedDateFormate;
    }
    if (this.dataService.appState.date.is24Hours == null) {
      if (this.labelService.userCountryId == 49 || this.labelService.userCountryId == 71) {
        this.timeFormate = "HH:mm";
      } else {
        this.timeFormate = "hh:mm A";
      }
    } else {
      this.timeFormate = this.dataService.appState.date.is24Hours ? "HH:mm" : "hh:mm A";
    }
    this.dataService.appState.date.selectedDateFormate = this.dateFormate;
    this.dataService.appState.date.is24Hours = this.timeFormate == "HH:mm" ? true : false;
    this.dataService.state.next(this.dataService.appState);
  }
  transform(value, str) {
    let checkTimeFormat = this.dataService.appData.authDetails["TimeFormatId"] == 3 ? "h:mm A" : "HH:mm";
    let dateFormat = localStorage.getItem("DateTimeFormat") ? localStorage.getItem("DateTimeFormat") : "MM/DD/YY";
    let addTimeZone = "";
    const timezoneMatch = value.match(/\((.*?)\)$/);
    if (str === "dt" && timezoneMatch) {
      addTimeZone = `(${timezoneMatch[1]})`;
    }
    let formatStartDate;
    const checkHypen = " - ";
    let startDt = new Date(value.split("-")[0]);
    formatStartDate = (0, import_moment.default)(startDt).format(`${dateFormat} ${checkTimeFormat}`);
    if (value.indexOf(checkHypen) > -1) {
      let endDt = new Date(startDt.getTime() + 30 * 6e4);
      let formatendDate = (0, import_moment.default)(endDt).format(`${checkTimeFormat}`);
      return `${formatStartDate} - ${formatendDate} ${addTimeZone}`;
    }
    return `${formatStartDate} ${addTimeZone}`;
  }
  static {
    this.\u0275fac = function LocalDatePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LocalDatePipe)(\u0275\u0275directiveInject(DataService, 16), \u0275\u0275directiveInject(LabelService, 16));
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "localDate", type: _LocalDatePipe, pure: true });
  }
};

// src/app/pipe/text-length.pipe.ts
var textCharLengthPipe = class _textCharLengthPipe {
  transform(value) {
    if (value) {
      const parser = new DOMParser();
      const html = parser.parseFromString(value, "text/html");
      value = html.body.textContent;
    }
    return value.length;
  }
  static {
    this.\u0275fac = function textCharLengthPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _textCharLengthPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "textCharLength", type: _textCharLengthPipe, pure: true });
  }
};

// src/app/pipe/capitalize.pipe.ts
var CapitalizePipe = class _CapitalizePipe {
  transform(value) {
    let result;
    if (value && value.trim().split(" ").length > 1) {
      result = value.trim().split(" ").map((ele) => {
        return ele[0].toUpperCase() + ele.slice(1);
      });
      result = result.join(" ");
    } else {
      if (value && value.length != 0 && value[0] != void 0) {
        result = value[0].toUpperCase() + value.slice(1);
      }
    }
    return result;
  }
  static {
    this.\u0275fac = function CapitalizePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CapitalizePipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "capitalize", type: _CapitalizePipe, pure: false });
  }
};

// src/app/pipe/physician-filter.pipe.ts
var PhysicianFilterPipe = class _PhysicianFilterPipe {
  transform(items, searchText) {
    if (!items)
      return [];
    if (!searchText)
      return items;
    return this._filter(items, searchText.toLowerCase());
  }
  _filter(list, searchText) {
    return list.filter((option) => {
      if (option.PhysicianIdName.toLowerCase().startsWith(searchText) || option.FirstName.toLowerCase().startsWith(searchText) || option.LastName.toLowerCase().startsWith(searchText)) {
        return true;
      } else {
        return false;
      }
    });
  }
  static {
    this.\u0275fac = function PhysicianFilterPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PhysicianFilterPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "physicianFilter", type: _PhysicianFilterPipe, pure: true });
  }
};

// src/app/pipe/pipe.module.ts
var pipeModule = class _pipeModule {
  static {
    this.\u0275fac = function pipeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _pipeModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _pipeModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [LocalDatePipe, CapitalizePipe, textCharLengthPipe], imports: [CommonModule] });
  }
};

// src/app/modules/header/header.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ read: a0 });
function HeaderComponent_div_17_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function HeaderComponent_div_17_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCrossClick());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function HeaderComponent_div_17_mat_option_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 52);
    \u0275\u0275listener("click", function HeaderComponent_div_17_mat_option_30_Template_mat_option_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSpeciesChange());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const species_r5 = ctx.$implicit;
    \u0275\u0275property("value", species_r5.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", species_r5.SpeciesName, " ");
  }
}
function HeaderComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "div", 37)(3, "div", 38)(4, "div", 39)(5, "mat-form-field", 40)(6, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function HeaderComponent_div_17_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.headerService.searchText, $event) || (ctx_r1.headerService.searchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup", function HeaderComponent_div_17_Template_input_keyup_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.getSearchVal($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 42);
    \u0275\u0275element(8, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, HeaderComponent_div_17_button_9_Template, 3, 0, "button", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 44)(11, "div", 45)(12, "div", 46)(13, "div", 47)(14, "mat-form-field", 40)(15, "mat-label", 48);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function HeaderComponent_div_17_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.headerService.filter.PatientName, $event) || (ctx_r1.headerService.filter.PatientName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 47)(19, "mat-form-field", 40)(20, "mat-label", 50);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function HeaderComponent_div_17_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.headerService.filter.PatientId, $event) || (ctx_r1.headerService.filter.PatientId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 47)(24, "mat-form-field", 40)(25, "mat-label", 50);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-select", 51);
    \u0275\u0275twoWayListener("ngModelChange", function HeaderComponent_div_17_Template_mat_select_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.headerService.filter.SpeciesId, $event) || (ctx_r1.headerService.filter.SpeciesId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(28, "mat-option", 52);
    \u0275\u0275listener("click", function HeaderComponent_div_17_Template_mat_option_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSpeciesChange());
    });
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, HeaderComponent_div_17_mat_option_30_Template, 2, 2, "mat-option", 53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 47)(32, "mat-form-field", 40)(33, "mat-label", 50);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function HeaderComponent_div_17_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.headerService.filter.Breed, $event) || (ctx_r1.headerService.filter.Breed = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 47)(37, "mat-form-field", 40)(38, "mat-label", 50);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function HeaderComponent_div_17_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.headerService.filter.OwnerName, $event) || (ctx_r1.headerService.filter.OwnerName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 54)(42, "div", 55)(43, "button", 56);
    \u0275\u0275listener("click", function HeaderComponent_div_17_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilter());
    });
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 57)(46, "button", 58);
    \u0275\u0275listener("click", function HeaderComponent_div_17_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.headerService.searchText);
    \u0275\u0275property("placeholder", ctx_r1.labelService.dsHeaderScreen.SearchPatientNameID);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.headerService.searchText);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.labelService.dsHeaderScreen.PatientName);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.labelService.dsHeaderScreen.PatientName);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.headerService.filter.PatientName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.labelService.dsHeaderScreen.PatientID);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.labelService.dsHeaderScreen.PatientID);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.headerService.filter.PatientId);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.labelService.dsHeaderScreen.Species);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.headerService.filter.SpeciesId);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(23, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.labelService.dsHeaderScreen.Species, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.dsSpecies);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.labelService.dsHeaderScreen.Breed);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.labelService.dsHeaderScreen.Breed);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.headerService.filter.Breed);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.labelService.dsHeaderScreen.OwnerName);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.labelService.dsHeaderScreen.OwnerName);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.headerService.filter.OwnerName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.labelService.dsHeaderScreen.ClearSearch, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.labelService.dsHeaderScreen.Search, " ");
  }
}
function HeaderComponent_div_18_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function HeaderComponent_div_18_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onCrossClick());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function HeaderComponent_div_18_mat_option_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 52);
    \u0275\u0275listener("click", function HeaderComponent_div_18_mat_option_30_Template_mat_option_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSpeciesChange());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const species_r9 = ctx.$implicit;
    \u0275\u0275property("value", species_r9.Id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", species_r9.SpeciesName, " ");
  }
}
function HeaderComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 36)(2, "div", 37)(3, "div", 38)(4, "div", 39)(5, "mat-form-field", 40)(6, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function HeaderComponent_div_18_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.headerService.searchText, $event) || (ctx_r1.headerService.searchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function HeaderComponent_div_18_Template_input_keyup_enter_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.search());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 42);
    \u0275\u0275element(8, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, HeaderComponent_div_18_button_9_Template, 3, 0, "button", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 44)(11, "div", 45)(12, "div", 46)(13, "div", 47)(14, "mat-form-field", 40)(15, "mat-label", 50);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function HeaderComponent_div_18_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.headerService.filter.PatientName, $event) || (ctx_r1.headerService.filter.PatientName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 47)(19, "mat-form-field", 40)(20, "mat-label", 50);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function HeaderComponent_div_18_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.headerService.filter.PatientId, $event) || (ctx_r1.headerService.filter.PatientId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 47)(24, "mat-form-field", 40)(25, "mat-label", 50);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-select", 51);
    \u0275\u0275twoWayListener("ngModelChange", function HeaderComponent_div_18_Template_mat_select_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.headerService.filter.SpeciesId, $event) || (ctx_r1.headerService.filter.SpeciesId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(28, "mat-option", 52);
    \u0275\u0275listener("click", function HeaderComponent_div_18_Template_mat_option_click_28_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSpeciesChange());
    });
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, HeaderComponent_div_18_mat_option_30_Template, 2, 2, "mat-option", 53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 47)(32, "mat-form-field", 40)(33, "mat-label", 50);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function HeaderComponent_div_18_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.headerService.filter.Breed, $event) || (ctx_r1.headerService.filter.Breed = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 47)(37, "mat-form-field", 40)(38, "mat-label", 50);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function HeaderComponent_div_18_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.headerService.filter.OwnerName, $event) || (ctx_r1.headerService.filter.OwnerName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 54)(42, "div", 55)(43, "button", 56);
    \u0275\u0275listener("click", function HeaderComponent_div_18_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilter());
    });
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 57)(46, "button", 58);
    \u0275\u0275listener("click", function HeaderComponent_div_18_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.headerService.searchText);
    \u0275\u0275property("placeholder", ctx_r1.labelService.dsHeaderScreen.SearchDoctorPatientNameID);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.headerService.searchText);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.labelService.dsHeaderScreen.PatientName);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.labelService.dsHeaderScreen.PatientName);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.headerService.filter.PatientName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.labelService.dsHeaderScreen.PatientID);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.labelService.dsHeaderScreen.PatientID);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.headerService.filter.PatientId);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.labelService.dsHeaderScreen.Species);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.headerService.filter.SpeciesId);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(23, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.labelService.dsHeaderScreen.Species, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.dsSpecies);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.labelService.dsHeaderScreen.Breed);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.labelService.dsHeaderScreen.Breed);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.headerService.filter.Breed);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.labelService.dsHeaderScreen.OwnerName);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.labelService.dsHeaderScreen.OwnerName);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.headerService.filter.OwnerName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.labelService.dsHeaderScreen.ClearSearch, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.labelService.dsHeaderScreen.Search, " ");
  }
}
function HeaderComponent_ng_container_23_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 74);
  }
}
function HeaderComponent_ng_container_23_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 75);
  }
}
function HeaderComponent_ng_container_23_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.emailCount);
  }
}
function HeaderComponent_ng_container_23_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275listener("click", function HeaderComponent_ng_container_23_div_10_Template_div_click_0_listener() {
      const row_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showPataientByNotification(row_r12));
    });
    \u0275\u0275elementStart(1, "div", 78);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 79);
    \u0275\u0275element(4, "img", 80);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c1, !row_r12.IsRead));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.NotificationMsg);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r12.TimeStr, " ");
  }
}
function HeaderComponent_ng_container_23_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.labelService.dsHeaderScreen.NoTestsAvailable, " ");
  }
}
function HeaderComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 62)(2, "button", 63);
    \u0275\u0275listener("menuOpened", function HeaderComponent_ng_container_23_Template_button_menuOpened_2_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNavigationOpen());
    })("menuClosed", function HeaderComponent_ng_container_23_Template_button_menuClosed_2_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNavigationClose());
    });
    \u0275\u0275template(3, HeaderComponent_ng_container_23_img_3_Template, 1, 0, "img", 64)(4, HeaderComponent_ng_container_23_img_4_Template, 1, 0, "img", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 66);
    \u0275\u0275element(6, "img", 67);
    \u0275\u0275template(7, HeaderComponent_ng_container_23_span_7_Template, 2, 1, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-menu", 69, 0);
    \u0275\u0275template(10, HeaderComponent_ng_container_23_div_10_Template, 6, 5, "div", 70)(11, HeaderComponent_ng_container_23_div_11_Template, 3, 1, "div", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 72);
    \u0275\u0275listener("click", function HeaderComponent_ng_container_23_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAlertMsgModal());
    });
    \u0275\u0275element(13, "img", 73);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const menu_r13 = \u0275\u0275reference(9);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r13)("matBadge", ctx_r1.headerService.msgCount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isNotificationOpen);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isNotificationOpen);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.emailCount);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.headerService.dsNotificationList);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.headerService.dsNotificationList === null || ctx_r1.headerService.dsNotificationList.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("matBadge", ctx_r1.alerts);
  }
}
function HeaderComponent_div_24_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 89);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r1.headerService.selectedBusinessName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.headerService.selectedBusinessName, " ");
  }
}
function HeaderComponent_div_24_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 93);
    \u0275\u0275listener("click", function HeaderComponent_div_24_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sidemenuService.goToRouterLink("user/profile"));
    });
    \u0275\u0275elementStart(1, "span", 94);
    \u0275\u0275element(2, "img", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.labelService.dsHeaderScreen.Profile);
  }
}
function HeaderComponent_div_24_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 97);
    \u0275\u0275listener("click", function HeaderComponent_div_24_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sidemenuService.goToRouterLink("user/account"));
    });
    \u0275\u0275elementStart(1, "span", 94);
    \u0275\u0275element(2, "img", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.labelService.dsHeaderScreen.accountSettings);
  }
}
function HeaderComponent_div_24_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 93);
    \u0275\u0275listener("click", function HeaderComponent_div_24_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.securityNav());
    });
    \u0275\u0275elementStart(1, "span", 94);
    \u0275\u0275element(2, "img", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.labelService.dsHeaderScreen.Security);
  }
}
function HeaderComponent_div_24_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 93);
    \u0275\u0275listener("click", function HeaderComponent_div_24_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.refreshDap());
    });
    \u0275\u0275elementStart(1, "span", 94);
    \u0275\u0275element(2, "img", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Refresh DAP");
    \u0275\u0275elementEnd()();
  }
}
function HeaderComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83)(2, "div", 84)(3, "div", 85)(4, "span", 86);
    \u0275\u0275text(5, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 87);
    \u0275\u0275template(7, HeaderComponent_div_24_p_7_Template, 2, 2, "p", 88);
    \u0275\u0275elementStart(8, "p", 89);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "mat-menu", 90, 1);
    \u0275\u0275template(12, HeaderComponent_div_24_button_12_Template, 5, 1, "button", 91)(13, HeaderComponent_div_24_button_13_Template, 5, 1, "button", 92)(14, HeaderComponent_div_24_button_14_Template, 5, 1, "button", 91)(15, HeaderComponent_div_24_button_15_Template, 5, 0, "button", 91);
    \u0275\u0275elementStart(16, "button", 93);
    \u0275\u0275listener("click", function HeaderComponent_div_24_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logOut());
    });
    \u0275\u0275elementStart(17, "span", 94);
    \u0275\u0275element(18, "img", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const usermenu_r19 = \u0275\u0275reference(11);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", usermenu_r19);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r1.isConsultantUser && ctx_r1.headerService.selectedBusinessName !== "null");
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.headerService.userName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.headerService.userName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isAccountSettings && ctx_r1.isProfileVisible);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAccountSettings);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isProfileVisible);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isRefreshDAPVisible);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.labelService.dsHeaderScreen.Logout);
  }
}
function HeaderComponent_div_25_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 101);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("title", ctx_r1.headerService.userName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Hi ", ctx_r1.headerService.userName, " ");
  }
}
function HeaderComponent_div_25_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 101);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 102);
    \u0275\u0275listener("click", function HeaderComponent_div_25_ng_container_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.headerService.EndBkoImpersonation());
    });
    \u0275\u0275text(4, " Return to Back Office ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("title", ctx_r1.headerService.userName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Hi ", ctx_r1.headerService.userName, " ");
  }
}
function HeaderComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275template(1, HeaderComponent_div_25_ng_container_1_Template, 3, 2, "ng-container", 23)(2, HeaderComponent_div_25_ng_container_2_Template, 5, 2, "ng-container", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.dataService.appState.isInBackOffice);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.dataService.appState.isInBackOffice);
  }
}
function HeaderComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103)(1, "div", 104)(2, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function HeaderComponent_div_27_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.headerService.searchText, $event) || (ctx_r1.headerService.searchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup", function HeaderComponent_div_27_Template_input_keyup_2_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.getSearchVal($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.headerService.searchText);
    \u0275\u0275property("placeholder", ctx_r1.labelService.dsHeaderScreen.SearchPatientNameID);
  }
}
var HeaderComponent = class _HeaderComponent {
  constructor(router, route, commonService, headerService, dataService, patientService, modalService, labelService, sidemenuService, pendoService, alertService, toastr) {
    this.router = router;
    this.route = route;
    this.commonService = commonService;
    this.headerService = headerService;
    this.dataService = dataService;
    this.patientService = patientService;
    this.modalService = modalService;
    this.labelService = labelService;
    this.sidemenuService = sidemenuService;
    this.pendoService = pendoService;
    this.alertService = alertService;
    this.toastr = toastr;
    this.dsAlertMsgSource = [];
    this.dsSpecies = [];
    this.dsSubSpecies = [];
    this.dsBreed = [];
    this.isNotificationOpen = false;
    this.isAccountSettings = true;
    this.isProfileVisible = true;
    this.isRefreshDAPVisible = window.location.host.indexOf("staging.zoetisdx.com") >= 0 || window.location.host.indexOf("dev.zoetisdx.com") >= 0 ? true : false;
    this.businessGUID = this.dataService.appData.authDetails["BusinessGuid"] != "" ? this.dataService.appData.authDetails["BusinessGuid"] : null;
    this.userGUID = this.dataService.appData.authDetails["UserGuid"] != "" ? this.dataService.appData.authDetails["UserGuid"] : null;
    this.outFilterBy = new EventEmitter();
    this.outFilterNotification = new EventEmitter();
    this.searchEvent = new EventEmitter();
    this.getSearchText = new Subject();
    this.showInput = false;
    this.alerts = "";
    this.isBackofficeUser = this.dataService.appData.authDetails["BackOfficeFlag"] == true ? true : false;
    this.isViewClinic = false;
    this.isinternlUser = false;
    this.isConsultUser = false;
    this.dataService.data.subscribe((data) => {
      this.authData = data.authDetails;
      this.emailCount = data["CommunicationEmailCount"];
    });
    this.isConsultantUser = this.dataService.appData.authDetails["IsConsultantUser"] == true ? true : false;
    this.getLabelDetails();
    const redirectionData = localStorage.getItem("rediretionDetails");
    if (redirectionData) {
      this.isViewClinic = redirectionData.split("isViewClinic=")[1] != void 0 ? JSON.parse(redirectionData.split("isViewClinic=")[1].split("&")[0]) : false;
      this.isinternlUser = redirectionData.split("isInternal=")[1] != void 0 ? JSON.parse(redirectionData.split("isInternal=")[1].split("&")[0]) : false;
      if (this.isinternlUser)
        localStorage.setItem("isInternalUser", this.isinternlUser);
      this.isConsultUser = redirectionData.split("isNewInternal=")[1] != void 0 ? JSON.parse(redirectionData.split("isNewInternal=")[1].split("&")[0]) : false;
    }
    this.commonService.SetLocaleForDate();
    if (localStorage.authDetails != void 0) {
      this.userId = JSON.parse(localStorage.authDetails).Id;
      this.selectedBusinessGuId = localStorage.businessGuid ? localStorage.businessGuid : "";
    }
    this.setDefaultFilter();
    if (window.location.href.split("/")[3] == "dashboard" && localStorage.advSearch != void 0) {
      this.headerService.filter = JSON.parse(localStorage.advSearch);
      this.setFilterText();
      localStorage.removeItem("advSearch");
    }
    this.headerService.getBusinessListDetailsByUserId(this.userGUID);
    const filterDropDowns = this.dataService.appData.filterDropDownList;
    this.dsSpecies = filterDropDowns.SpeciesList;
    this.dsBreed = filterDropDowns.Breed;
    if (this.commonService.isAlertModelDefaultOpen && this.headerService.isAlertMsgAvailable) {
      this.commonService.isAlertModelDefaultOpen = false;
    }
    let isModalOpen = false;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (isModalOpen == false) {
          this.getAlertsCount();
          isModalOpen = true;
        }
      }
    });
    this.alertService.updateAlertCount.subscribe(() => this.getAlertsCount());
    if (localStorage.isInternalUser)
      this.isinternlUser = true;
  }
  getAlertsCount() {
    if (!(this.authData["BackOfficeFlag"] || this.authData["IsConsultantUser"])) {
      this.alertService.getAlertMsg(this.headerService.loginUserGuid, this.dataService.appData.authDetails["BusinessGuid"]).subscribe((data) => {
        this.dataService.appData["CommunicationEmailCount"] = data.ResponseData["CommunicationEmailCount"];
        this.dataService.data.next(this.dataService.appData);
        this.alerts = data.ResponseData["AlertDetails"].length || "";
        this.dsAlertMsgSource = data.ResponseData["AlertDetails"].filter((x) => x.IsRead == false);
        if (this.dsAlertMsgSource.length > 0) {
          setTimeout(() => {
            this.openAlertMsgModal(this.dsAlertMsgSource, true, "");
          }, 2e3);
        }
      });
    }
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchText = params.searchText || this.headerService.searchText;
      this.headerService.filter.SearchText = this.searchText;
      this.dataService.appState.searchResult.searchStr = this.searchText;
      this.dataService.state.next(this.dataService.appState);
      this.commonService.firebase.analytics().logEvent("search", { search_term: this.searchText });
      this.searchEvent.emit(this.searchText);
    });
    this.userType = localStorage.authDetails ? JSON.parse(localStorage.authDetails) : void 0;
    if (this.userType?.UserTypeId == EnmUserType.Consult || this.userType?.UserTypeId == EnmUserType.ConsultAdmin) {
      this.isAccountSettings = false;
    } else {
      this.isAccountSettings = true;
    }
    if (this.userType != void 0 && this.userType?.UserTypeId == EnmUserType.InternalClinic) {
      this.isProfileVisible = false;
    } else {
      this.isProfileVisible = true;
    }
    this.getSearchText.pipe(debounceTime(1e3), distinctUntilChanged()).subscribe((data) => {
      if (data.length > 0)
        this.search();
    });
  }
  getLabelDetails() {
    this.labelService.getLabelDetails(null, this.labelService.selectedLanguage).subscribe((data) => {
      this.labelService.dsLabelData = data.ResponseData;
      this.labelService.bindHeaderLabel();
    });
  }
  onBusinessChange(ele) {
    localStorage.setItem("businessGuid", this.selectedBusinessGuId.toString());
    this.headerService.businessGuid = this.selectedBusinessGuId;
    localStorage.setItem("businessName", ele.BusinessName);
    this.headerService.selectedBusinessName = ele.BusinessName;
  }
  onSpeciesChange() {
    if (this.headerService.filter.SpeciesId != null && this.headerService.filter.SpeciesId > 0)
      this.dsSubSpecies = this.dsSpecies.find((x) => x.Id === this.headerService.filter.SpeciesId)["SubSpecies"];
    else
      this.dsSubSpecies = [];
  }
  applyFilter() {
    this.headerService.filter.SearchText = null;
    this.setFilterText();
    if (window.location.href.split("/")[3] == "dashboard") {
      this.callEmit();
    } else {
      localStorage.setItem("advSearch", JSON.stringify(this.headerService.filter));
      this.router.navigateByUrl("/dashboard");
    }
  }
  callEmit() {
    this.outFilterBy.emit(this.headerService.filter);
  }
  // public closeAsvinceSearch() {
  //   $(".advace-drop").addClass("d-none");
  //   $(".overlay1").removeClass("active");
  // }
  onCrossClick() {
    this.setDefaultFilter();
    this.callEmit();
    this.searchText = "";
    this.headerService.searchText = "";
  }
  setFilterText() {
    this.headerService.filter.SearchTextToDisplayOnDashboard = "";
    this.headerService.searchText = "";
    this.searchText = "";
    if (this.headerService.filter.SearchText != null && this.headerService.filter.SearchText != "")
      this.searchText += " " + this.labelService.dsHeaderScreen.SearchPatientNameID + ": <span style='font-family: gotham, Arial; font-weight: normal;'>" + this.headerService.filter.SearchText + "</span>";
    if (this.headerService.filter.PatientName != null && this.headerService.filter.PatientName != "")
      this.searchText += " " + this.labelService.dsHeaderScreen.PatientName + ": <span style='font-family: gotham, Arial; font-weight: normal;'>" + this.headerService.filter.PatientName + "</span>";
    if (this.headerService.filter.PatientId != null && this.headerService.filter.PatientId != "")
      this.searchText += " " + this.labelService.dsHeaderScreen.PatientID + ": <span style='font-family: gotham, Arial; font-weight: normal;'>" + this.headerService.filter.PatientId + "</span>";
    if (this.headerService.filter.OwnerName != null && this.headerService.filter.OwnerName != "")
      this.searchText += " " + this.labelService.dsHeaderScreen.OwnerName + ": <span style='font-family: gotham, Arial; font-weight: normal;'>" + this.headerService.filter.OwnerName + "</span>";
    if (this.headerService.filter.SpeciesId != null && this.headerService.filter.SpeciesId > 0) {
      if (this.dsSpecies.length == 0)
        this.dsSpecies = this.dataService.appData.filterDropDownList.Species;
      this.searchText += " " + this.labelService.dsHeaderScreen.Species + ": <span style='font-family: gotham, Arial; font-weight: normal;'>" + (this.dsSpecies.length > 0 ? this.dsSpecies.find((x) => x.Id == this.headerService.filter.SpeciesId).SpeciesName : this.headerService.filter.SpeciesId) + "</span>";
    }
    if (this.headerService.filter.Breed != null && this.headerService.filter.Breed != "")
      this.searchText += " " + this.labelService.dsHeaderScreen.Breed + ": <span style='font-family: gotham, Arial; font-weight: normal;'>" + this.headerService.filter.Breed + "</span>";
    if (this.searchText != "") {
      this.headerService.filter.SearchTextToDisplayOnDashboard = this.searchText;
      this.searchText = "";
    }
  }
  getSearchVal(event) {
    this.getSearchText.next(event.target.value);
  }
  search() {
    if (this.headerService.searchText != "") {
      this.router.navigate(["/search-result"], {
        queryParams: {
          searchText: this.headerService.searchText
        }
      });
    }
  }
  clearFilter() {
    this.setDefaultFilter();
    this.callEmit();
  }
  setDefaultFilter() {
    this.headerService.setDefaultAdvSearch();
    this.dsSubSpecies = [];
  }
  onNavigationOpen() {
    this.headerService.msgCount = "";
    this.headerService.showNotificationCount = false;
    this.isNotificationOpen = true;
    this.headerService.getNotification(this.labelService.selectedLanguage, false);
  }
  onNavigationClose() {
    this.isNotificationOpen = false;
  }
  showPataientByNotification(ele) {
    if (ele.IsAdminOnly == false)
      this.headerService.selectedNotification = ele;
    if (window.location.href.split("/")[3] == "dashboard" && ele.IsAdminOnly == false) {
      this.outFilterNotification.emit(ele);
    } else if (ele.IsAdminOnly) {
      this.commonService.clinicNavigation.next(true);
      this.router.navigateByUrl("/fuse/list");
    } else {
      this.router.navigateByUrl("/dashboard");
    }
    if (!ele.IsRead) {
      ele.IsRead = true;
      this.headerService.updateNotificationRead(ele).subscribe(() => {
        this.headerService.getNotification(this.labelService.selectedLanguage, true);
      }, (error) => {
        console.log(error);
      });
    }
  }
  diff_hours(dt) {
    let diff = (new Date(dt).getTime() - (/* @__PURE__ */ new Date()).getTime()) / 1e3;
    diff /= 60 * 60;
    return Math.abs(Math.round(diff));
  }
  refreshDap() {
    if (this.isRefreshDAPVisible) {
      this.commonService.refreshDap().subscribe((data) => {
        if (data.ResponseData.status == "Ok") {
          alert("Refreshed");
          window.location.reload();
        } else
          alert(data.ResponseData.status);
      }, (err) => {
        console.log(JSON.stringify(err));
        this.commonService.showCommonToastrError();
      });
    }
  }
  logOut() {
    const logOutPg = "/login";
    const UserTypeId = JSON.parse(localStorage.authDetails).UserTypeId;
    if (UserTypeId == EnmUserType.InternalClinic || UserTypeId == EnmUserType.Consult || UserTypeId == EnmUserType.ConsultAdmin)
      return this.sidemenuService.logOut("internal");
    this.sidemenuService.logOut();
    this.router.navigate([logOutPg]);
    const date = /* @__PURE__ */ new Date();
    sessionStorage.setItem("sess1", "gigya logout process start" + date);
    if (typeof gigya !== "undefined") {
      sessionStorage.setItem("sess2", "gigya logout calling" + date);
      gigya.accounts.logout();
      sessionStorage.setItem("sess3", "gigya logout called" + date);
    }
    sessionStorage.setItem("sess4", "gigya logout process end" + date);
  }
  logoutInternal() {
    this.sidemenuService.logOut("internal");
  }
  deleteAllCookies() {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      if (cookie.indexOf(" _ga") != -1) {
        const equalPos = cookie.indexOf("=");
        const name = equalPos > -1 ? cookie.substring(0, equalPos) : cookie;
        document.cookie = name + "=";
      }
    }
  }
  onGigyaLogout(response) {
    if (response.errorCode == 0) {
      console.log("You are now logged out");
    } else {
      console.log("Error :" + response.errorMessage);
    }
  }
  securityNav() {
    if (this.isConsultantUser) {
      this.sidemenuService.goToRouterLink("consult/security");
    } else {
      this.sidemenuService.goToRouterLink("user/security");
    }
  }
  openAlertMsgModal(dsAlertMsgSource, isAlertMsgAvailable, label) {
    const modalRef = this.modalService.open(AlertMessageComponent, {
      centered: true,
      backdrop: "static",
      scrollable: false
    });
    modalRef.componentInstance.userGUID = this.userGUID;
    modalRef.componentInstance.dsAlertMsgSource = dsAlertMsgSource;
    modalRef.componentInstance.isAlertMsgAvailable = isAlertMsgAvailable;
    modalRef.componentInstance.NoAlertFound = label;
  }
  mobileSearchToggle() {
    this.showInput = !this.showInput;
  }
  installZdxApp() {
    if (navigator.userAgent.match(/Android/i)) {
      window.location.href = "https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=com.zoetis.moose";
    } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      window.location.href = "itms-apps://apps.apple.com/us/app/zoetisdx/id1545264353";
    }
  }
  toggleMenu() {
    this.commonService.menuToggle.next(true);
  }
  static {
    this.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(CommonService), \u0275\u0275directiveInject(HeaderService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(PatientService), \u0275\u0275directiveInject(NgbModal), \u0275\u0275directiveInject(LabelService), \u0275\u0275directiveInject(SidemenuService), \u0275\u0275directiveInject(PendoService), \u0275\u0275directiveInject(AlertService), \u0275\u0275directiveInject(ToastrService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], outputs: { outFilterBy: "outFilterBy", outFilterNotification: "outFilterNotification", searchEvent: "searchEvent" }, decls: 41, vars: 6, consts: [["menu", "matMenu"], ["usermenu", "matMenu"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "fixed-top"], [1, "container-fluid", "pl-0", "pr-0"], [1, "d-flex", "justify-content-between", "w-100"], [1, "mobileicon"], [1, "toggle-outer"], ["mat-icon-button", "", "color", "accent", "id", "sidebarCollapse", 3, "click"], ["src", "../../../../assets/img/hambrger1.png", "alt", ""], [1, "row", "w-100", "navblock", "m-0", "justify-content-between", "position-relative"], [1, "col-7", "col-sm-8", "col-lg-9", "d-flex", "align-items-center", "justify-content-between"], [1, "openBtn", "d-block", "d-sm-none", 3, "click"], ["src", "../../../../assets/img/search-icon.png", "alt", ""], ["src", "../../../../assets/img/logo-header@2x.png", "alt", "", 1, "logoicon1", "ml-0", 3, "click"], ["id", "myOverlay2", 1, "overlay", "d-sm-none"], ["id", "mybtn", "onclick", "closeSearch()", "title", "Close Overlay", 1, "closebtn"], [1, "overlay-content"], ["class", "w-100 ml-0 advance-srch", 4, "ngIf"], ["class", "w-100 d-none d-sm-block ml-5   advance-srch", 4, "ngIf"], [1, "col-5", "col-sm-4", "col-lg-3", "pl-0", "d-flex", "justify-content-end"], [1, "d-flex", "align-items-center", "justify-content-start"], [1, "text-center", "name-block"], [1, "location", "d-flex", "flex-row", "align-items-center"], [4, "ngIf"], ["class", "d-flex justify-content-start align-items-center", 4, "ngIf"], ["class", "d-flex justify-content-start align-items-end header-address flex-column", 4, "ngIf"], [1, "spacepart"], ["class", "topSearch", 4, "ngIf"], [1, "all-ban"], [1, "ban_section", "d-flex", "justify-content-between", "align-items-center"], [1, "ban_part1"], ["src", "../../../../assets/img/logo-header@2x.png", "alt", "", 1, "logoicon1", "ml-0"], [1, "ban_part2"], [1, "ban_part3", 3, "click"], [1, "overlay1"], [1, "w-100", "ml-0", "advance-srch"], [1, "row"], [1, "col-md-12", "nopad"], ["id", "adv-search", 1, "input-group"], [1, "d-flex", "w-100"], ["appearance", "outline", "floatLabel", "always", 1, "w-100"], ["matInput", "", "type", "text", 3, "ngModelChange", "keyup", "ngModel", "placeholder"], ["matPrefix", ""], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [1, "advace-drop", "d-none"], ["role", "menu", 1, ""], [1, "form-horizontal"], [1, "form-group"], ["data-testid", "mk-app-title", 1, "text-left"], ["type", "text", "matInput", "", "maxlength", "20", 3, "ngModelChange", "placeholder", "ngModel"], [1, "text-left"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "click", "value"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "row", "d-flex", "justify-content-center", "last-row"], [1, "col", "text-right"], ["mat-flat-button", "", "color", "primary", 1, "mb-2", 3, "click"], [1, "col", "text-left"], ["mat-flat-button", "", "color", "accent", 1, "mb-2", 3, "click"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], [1, "w-100", "d-none", "d-sm-block", "ml-5", "advance-srch"], ["matInput", "", "type", "text", 3, "ngModelChange", "keyup.enter", "ngModel", "placeholder"], [1, "noti-outer"], ["mat-icon-button", "", "matBadgeOverlap", "true", 1, "blue-color", "not-color", 3, "menuOpened", "menuClosed", "matMenuTriggerFor", "matBadge"], ["class", "noti", "src", "../../../../assets/img/notification-icon.png", "alt", "", 4, "ngIf"], ["class", "noti", "src", "../../../../assets/img/notification-selected-icon@2x.png", "alt", "", 4, "ngIf"], ["routerLink", "/communication/center", 1, "position-relative"], ["src", "../../../../assets/img/communication-center.svg", "alt", "", 1, "noti"], ["class", "i-badge", 4, "ngIf"], ["xPosition", "before", 1, "notification-drop"], ["class", "pl-4 mb-2 pt-1 pb-1 noti-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "pl-4 mb-2 pt-1 pb-1", 4, "ngIf"], ["mat-icon-button", "", "matBadgeOverlap", "true", "alt", "announcement", 1, "orange-badge", 3, "click", "matBadge"], ["src", "../../../../assets/img/announcement-navigation.png", "alt", "", 1, "noti"], ["src", "../../../../assets/img/notification-icon.png", "alt", "", 1, "noti"], ["src", "../../../../assets/img/notification-selected-icon@2x.png", "alt", "", 1, "noti"], [1, "i-badge"], [1, "pl-4", "mb-2", "pt-1", "pb-1", "noti-item", 3, "click", "ngClass"], [1, "noti-text"], [1, "timeclock"], ["src", "../../../../assets/img/clock@2x.png", "alt", ""], [1, "pl-4", "mb-2", "pt-1", "pb-1"], [1, "d-flex", "justify-content-start", "align-items-center"], [1, "d-flex", "justify-content-start", "align-items-start", "flex-column"], ["panelClass", "test", 1, "header-name", 3, "matMenuTriggerFor"], [1, "user_icon"], [1, "material-icons", 2, "font-size", "32px", "color", "#f65c00"], [1, "user-name-top"], ["class", "m-0 head-user", 3, "title", 4, "ngIf"], [1, "m-0", "head-user", 3, "title"], ["xPosition", "before", 1, "customClass", "profile-drop"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["class", "text_btn", "mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], [1, "usericon"], ["src", "../../../../assets/img/logout-munu-icon@2x.png", "alt", ""], ["src", "../../../../assets/img/profile@2x.png", "alt", ""], ["mat-menu-item", "", 1, "text_btn", 3, "click"], ["src", "../../../../assets/img/account-settings@2x.png", "alt", ""], ["src", "../../../../assets/img/security.png", "alt", ""], [1, "d-flex", "justify-content-start", "align-items-end", "header-address", "flex-column"], ["mat-raised-button", "", "color", "primary", 1, "backoff_header", 3, "title"], ["mat-raised-button", "", "title", "Return to Backoffice", 1, "return_btn", 3, "click"], [1, "topSearch"], [1, "form-outline"]], template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "span", 6)(5, "button", 7);
        \u0275\u0275listener("click", function HeaderComponent_Template_button_click_5_listener() {
          return ctx.toggleMenu();
        });
        \u0275\u0275element(6, "img", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 9)(8, "div", 10)(9, "button", 11);
        \u0275\u0275listener("click", function HeaderComponent_Template_button_click_9_listener() {
          return ctx.mobileSearchToggle();
        });
        \u0275\u0275element(10, "img", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div")(12, "img", 13);
        \u0275\u0275listener("click", function HeaderComponent_Template_img_click_12_listener() {
          return ctx.sidemenuService.goToLink(ctx.sidemenuService.dsSideMenu[0].TableId);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 14)(14, "span", 15);
        \u0275\u0275text(15, "\xD7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 16);
        \u0275\u0275template(17, HeaderComponent_div_17_Template, 48, 24, "div", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(18, HeaderComponent_div_18_Template, 48, 24, "div", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 19)(20, "div", 20)(21, "div", 21)(22, "div", 22);
        \u0275\u0275template(23, HeaderComponent_ng_container_23_Template, 14, 8, "ng-container", 23)(24, HeaderComponent_div_24_Template, 21, 9, "div", 24)(25, HeaderComponent_div_25_Template, 3, 2, "div", 25);
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275element(26, "div", 26);
        \u0275\u0275template(27, HeaderComponent_div_27_Template, 4, 2, "div", 27);
        \u0275\u0275elementStart(28, "div", 28)(29, "div", 29)(30, "div", 30);
        \u0275\u0275element(31, "img", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 32)(33, "p");
        \u0275\u0275text(34, "Diagnostic results at your fingertips");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p");
        \u0275\u0275text(36, "Open in the ZoetisDx app");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 33);
        \u0275\u0275listener("click", function HeaderComponent_Template_div_click_37_listener() {
          return ctx.installZdxApp();
        });
        \u0275\u0275elementStart(38, "p");
        \u0275\u0275text(39, "OPEN");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(40, "div", 34);
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275property("ngIf", !ctx.isConsultantUser);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isConsultantUser);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", !ctx.isConsultantUser && !ctx.isBackofficeUser);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isBackofficeUser);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isBackofficeUser);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showInput);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, RouterLink, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, MatLegacyFormField, MatLegacyLabel, MatLegacyPrefix, MatLegacySuffix, MatLegacyInput, MatLegacyButton, MatIcon, MatLegacySelect, MatLegacyOption, MatBadge, MatLegacyMenu, MatLegacyMenuItem, MatLegacyMenuTrigger], styles: ['\n\n.navbar[_ngcontent-%COMP%] {\n  padding: 0;\n  height: 75px;\n}\n.toggle-outer[_ngcontent-%COMP%] {\n  height: 75px;\n  background:\n    radial-gradient(\n      100% 100% at 0% 10.61%,\n      #6fb0c7 13.98%,\n      #035771 87.81%);\n  width: 70px;\n  text-align: center;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n.menu[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n.logoicon[_ngcontent-%COMP%] {\n  width: 125px;\n  position: absolute;\n  top: 9px;\n  left: 91px;\n}\n.navbar[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  min-width: 0;\n  max-width: 100%;\n}\n.dateouter[_ngcontent-%COMP%] {\n  line-height: 14px;\n  white-space: nowrap;\n}\n.d1[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.d2[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n}\n.location[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-right: 0px;\n}\n.header-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  text-align: left;\n  font-family: "GothamNarrowBold", sans-serif;\n  width: 100%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.header-name[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  float: left;\n}\n.header-name[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: unset;\n  margin-top: 14px;\n}\n.name-block[_ngcontent-%COMP%] {\n  line-height: 13px;\n}\n.bell[_ngcontent-%COMP%] {\n  text-align: center;\n  border-right: 1px solid #979797;\n  margin-right: 36px;\n}\n.srch[_ngcontent-%COMP%] {\n  position: relative;\n  top: -5px;\n}\n.last[_ngcontent-%COMP%] {\n  max-width: 211px !important;\n}\n.mat-raised-button[_ngcontent-%COMP%] {\n  line-height: 35px !important;\n}\n.mat-option-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.fixed-top[_ngcontent-%COMP%] {\n  z-index: 94;\n}\n.down-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n#adv-search[_ngcontent-%COMP%] {\n  position: relative;\n}\n.advace-drop[_ngcontent-%COMP%] {\n  z-index: 99;\n  position: absolute;\n  width: 100%;\n  top: 42px;\n  background: #fff;\n  border: solid 0.5px rgba(151, 151, 151, 0.16);\n  padding: 34px 16px 19px 16px;\n  box-shadow: 5px 6px 12px 0 rgba(0, 0, 0, 0.11);\n}\n.dropdown-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: 5px;\n}\n.btn.focus[_ngcontent-%COMP%], \n.btn[_ngcontent-%COMP%]:focus {\n  outline: 0;\n  box-shadow: none;\n}\n.overlay1[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0);\n  z-index: 84;\n  opacity: 0;\n  transition: all 0.5s ease-in-out;\n  left: 0;\n  top: 0;\n}\n.overlay1.active[_ngcontent-%COMP%] {\n  display: block;\n  opacity: 1;\n}\n#adv-search[_ngcontent-%COMP%] {\n  width: 85%;\n  margin: 0 auto;\n}\n.mat-flat-button[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: #fff;\n  width: 170px;\n  margin-right: 0px;\n  border: solid 0.4px #979797;\n}\n.mat-flat-button.mat-accent[_ngcontent-%COMP%] {\n  background-color: #ff6400;\n  width: 170px;\n  color: #fff;\n  border: none;\n}\n.headersrch[_ngcontent-%COMP%] {\n  background-image: url("./media/search-icon.png");\n  background-repeat: no-repeat;\n  background-position: 8px 11px;\n  padding-left: 32px;\n}\n.form-control.headersrch[_ngcontent-%COMP%] {\n  height: 40px;\n  border: solid 0.5px rgba(151, 151, 151, 0.16);\n  border-radius: 5px;\n}\n#adv-search[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: "";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  font-size: 18px;\n  color: #7d7d7d;\n  border-left: 0.3em solid transparent;\n  margin-top: 10px;\n}\n.username[_ngcontent-%COMP%] {\n  width: 267px;\n  position: fixed;\n  right: 9px;\n  top: 18px;\n}\n.logoicon1[_ngcontent-%COMP%] {\n  outline: none;\n  cursor: pointer;\n  width: 105px;\n  margin-left: 10px !important;\n}\n.mat-menu-item[_ngcontent-%COMP%] {\n  line-height: 52px;\n  height: auto;\n  padding-top: 5px;\n}\n.noti-menu[_ngcontent-%COMP%] {\n  line-height: 18px;\n  word-break: break-word;\n  white-space: normal;\n}\n.noti-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-bottom: 0px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.timeclock[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #818181;\n  font-family: "gothambook", sans-serif;\n  display: flex;\n  align-items: center;\n}\n.timeclock[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.read[_ngcontent-%COMP%] {\n  background: #f5f7f9 !important;\n}\n.mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -8px;\n  top: -11px;\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n}\n.mat-badge-content[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #1072ce;\n}\n.dsktop-logo[_ngcontent-%COMP%] {\n  display: block;\n}\n.ipad-logo[_ngcontent-%COMP%] {\n  display: none;\n}\n.pname[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: "GothamNarrowBold", sans-serif;\n}\n.noti-item[_ngcontent-%COMP%]:hover {\n  background-color: #f5f7f9 !important;\n  color: #000 !important;\n}\n.noti-list-item[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  outline: 0;\n  border: none;\n  -webkit-tap-highlight-color: transparent;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  max-width: 100%;\n  position: relative;\n}\n.noti-list-item[_ngcontent-%COMP%] {\n  line-height: 52px;\n  height: auto;\n  padding-top: 5px;\n}\n.noti-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n  .customClass .mat-menu-content .mat-menu-item {\n  height: 47px !important;\n  line-height: 38px;\n  display: flex;\n  font-family: "GothamNarrowBold", sans-serif !important;\n  color: #3e3e3e;\n  font-size: 12px !important;\n  border-radius: 0 !important;\n  cursor: pointer;\n}\n  .customClass .mat-menu-content .mat-menu-item:hover {\n  background: #f5f7f9;\n  cursor: pointer;\n}\n.usericon[_ngcontent-%COMP%] {\n  margin-right: 7px;\n  width: 24px;\n  display: block;\n  text-align: center;\n}\n.header-name[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100px;\n  white-space: nowrap;\n  display: block;\n  background-color: transparent !important;\n  color: #000;\n  border: none;\n  line-height: 11px !important;\n  height: 14px !important;\n  padding: 0;\n  padding-left: 10px;\n  text-align: left;\n  font-size: 12px;\n}\n.bus1[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100px;\n  white-space: nowrap;\n  display: block;\n  background-color: transparent !important;\n  color: #000;\n  border: none;\n  line-height: 11px !important;\n  height: 14px !important;\n  padding: 0;\n  padding-left: 10px;\n  text-align: left;\n  font-size: 12px;\n}\n.mobileicon[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (min-width: 801px) {\n  .col-sm-9[_ngcontent-%COMP%] {\n    width: calc(100vw - 358px);\n    position: absolute;\n    right: 277px;\n    transition: all 0.3s;\n    top: 12px;\n    flex: 0 0 80%;\n    max-width: 86%;\n  }\n}\n@media (max-width: 1024px) {\n  .toggle-outer[_ngcontent-%COMP%] {\n    height: 75px;\n    width: 45px;\n  }\n  .dsktop-logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .ipad-logo[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: 13px;\n  }\n  .toggle-outer[_ngcontent-%COMP%] {\n    background: transparent !important;\n  }\n  .header-address[_ngcontent-%COMP%] {\n    width: 117px;\n  }\n  .mat-flat-button.mat-accent[_ngcontent-%COMP%], \n   .mat-flat-button[_ngcontent-%COMP%] {\n    width: 138px !important;\n  }\n  .nopad[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .username[_ngcontent-%COMP%] {\n    width: 214px;\n  }\n  .mat-mini-fab[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n  #sidebarCollapse[_ngcontent-%COMP%] {\n    background: #1072ce !important;\n    margin-left: 20px;\n  }\n  .logoicon1[_ngcontent-%COMP%] {\n    width: 100px;\n    left: 12px !important;\n    position: relative;\n  }\n  .toggle-outer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 23px;\n  }\n  .navblock[_ngcontent-%COMP%] {\n    width: 90% !important;\n  }\n  .mobileicon[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media screen and (min-width: 576px) and (max-width: 800px) {\n  .col-sm-9[_ngcontent-%COMP%] {\n    width: calc(100vw - 283px);\n    position: absolute;\n    right: 241px;\n    transition: all 0.3s;\n    top: 12px;\n    flex: 0 0 80%;\n    max-width: 86%;\n  }\n  .mobileicon[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {\n  .toggle-outer[_ngcontent-%COMP%] {\n    height: 75px;\n    width: 45px;\n  }\n  .dsktop-logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .ipad-logo[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: 13px;\n  }\n  .toggle-outer[_ngcontent-%COMP%] {\n    background: transparent !important;\n  }\n  .noti-outer[_ngcontent-%COMP%] {\n    margin-right: 21px;\n  }\n  .header-address[_ngcontent-%COMP%] {\n    width: 135px;\n  }\n  .mat-flat-button.mat-accent[_ngcontent-%COMP%], \n   .mat-flat-button[_ngcontent-%COMP%] {\n    width: 138px !important;\n  }\n  .nopad[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .username[_ngcontent-%COMP%] {\n    width: 214px;\n  }\n  .mat-mini-fab[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n  #sidebarCollapse[_ngcontent-%COMP%] {\n    background: #1072ce !important;\n    margin-left: 20px;\n  }\n  .logoicon1[_ngcontent-%COMP%] {\n    width: 100px;\n    left: 12px !important;\n    position: relative;\n  }\n  .toggle-outer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 23px;\n  }\n  .navblock[_ngcontent-%COMP%] {\n    width: 90% !important;\n  }\n}\n.user_icon[_ngcontent-%COMP%] {\n  position: relative;\n  top: 1px;\n  right: 0;\n}\n.annncmnet[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.advance-srch[_ngcontent-%COMP%]   .mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n  padding-right: 0px !important;\n}\n.mat-menu-panel[_ngcontent-%COMP%] {\n  margin-right: 0px !important;\n}\n.spacepart[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.all-ban[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 767px) {\n  .spacepart[_ngcontent-%COMP%] {\n    display: block !important;\n    height: 56px;\n  }\n  .mobileicon[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .dashboard-wrapper[_ngcontent-%COMP%]   .mat-drawer-content[_ngcontent-%COMP%] {\n    overflow: initial !important;\n  }\n  .ban_part2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    font-size: 12px;\n  }\n  .ban_part1[_ngcontent-%COMP%]   .logoicon1[_ngcontent-%COMP%] {\n    width: 80px;\n  }\n  .ban_part3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n  .ban_part2[_ngcontent-%COMP%] {\n    margin-left: 15px;\n  }\n  .all-ban[_ngcontent-%COMP%] {\n    display: block;\n    padding: 15px 0;\n    background: #fff;\n    margin-bottom: 3px;\n  }\n  .ban_part3[_ngcontent-%COMP%] {\n    background: #f65c00;\n    color: #fff;\n    font-weight: 600;\n    text-transform: uppercase;\n    padding: 3px 12px 2px 12px;\n    border-radius: 25px;\n    margin-right: 8px;\n    font-size: 11px;\n  }\n  .ban_part2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n    font-weight: bold;\n  }\n  .ban_part2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n    font-style: italic;\n  }\n  .topSearch[_ngcontent-%COMP%] {\n    background: #e6e0e0;\n    padding: 15px 20px;\n    position: relative;\n  }\n  .form-outline[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    position: relative;\n    border: 1px solid #fff;\n    padding: 8px;\n    background: #fff;\n  }\n  .form-outline[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding-left: 32px;\n    width: 85%;\n  }\n  .form-outline[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 9px;\n    left: 10px;\n  }\n    .profile-drop.mat-menu-panel {\n    width: 180px !important;\n    max-width: 180px !important;\n    min-width: 180px !important;\n    margin-right: 6px;\n  }\n  .user-name-top[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header-address[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .text_btn[_ngcontent-%COMP%] {\n    white-space: inherit;\n    line-height: 16px !important;\n    align-items: center;\n  }\n}\n@media screen and (max-width: 575px) {\n  .logo-top[_ngcontent-%COMP%] {\n    top: 19px;\n  }\n  .username[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .openBtn[_ngcontent-%COMP%] {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n  .mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n    right: -4px;\n    top: -5px;\n    width: 21px;\n    height: 21px;\n    line-height: 21px;\n  }\n  .overlay[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    display: none;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n  .overlay-content[_ngcontent-%COMP%] {\n    position: relative;\n    top: 46%;\n    width: 80%;\n    text-align: center;\n    margin-top: 30px;\n  }\n  .overlay-content[_ngcontent-%COMP%] {\n    margin: auto;\n  }\n  .overlay[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -4px;\n    right: 14px;\n    font-size: 36px;\n    cursor: pointer;\n    color: white;\n  }\n}\n@media screen and (max-width: 800px) and (min-width: 767px) {\n    .profile-drop.mat-menu-panel {\n    margin-right: 14px !important;\n  }\n}\n.orange-badge[_ngcontent-%COMP%]   .mat-badge-content.mat-badge-active[_ngcontent-%COMP%] {\n  background-color: #f65c00 !important;\n}\n@media only screen and (min-device-width: 810px) and (max-device-width: 1080px) and (orientation: landscape) {\n  .user-name-top[_ngcontent-%COMP%] {\n    width: 110px;\n  }\n}\n.backoff_header[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 150px;\n  white-space: nowrap;\n  display: block;\n  background-color: transparent !important;\n  color: #000;\n  border: none;\n  line-height: 11px !important;\n  height: 29px !important;\n  font-weight: 600;\n}\n.return_btn[_ngcontent-%COMP%] {\n  background-color: tansparent !important;\n  color: #f65c00;\n  border: #f65c00 1px solid;\n  font-weight: bold;\n}\n  .notification-drop {\n  margin-right: -120px;\n}\n.noti-outer[_ngcontent-%COMP%]   .not-color[_ngcontent-%COMP%]     .mat-badge-content {\n  background: #1072ce !important;\n}\n.head-user[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.i-badge[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background: #1072ce !important;\n  width: 18px;\n  height: 18px;\n  line-height: 18px;\n  display: inline-block;\n  border-radius: 20px;\n  top: -12px;\n  position: absolute;\n  left: 11px;\n  font-size: 10px;\n  font-weight: bold;\n}\n  .mat-badge-medium .mat-badge-content {\n  width: 18px;\n  height: 18px;\n  line-height: 18px;\n  top: -2px !important;\n  right: -1px !important;\n  font-size: 10px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=header.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src\\app\\modules\\header\\header.component.ts", lineNumber: 20 });
})();

// src/app/modules/header/header.module.ts
var HeaderModule = class _HeaderModule {
  static {
    this.\u0275fac = function HeaderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HeaderModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      MatModule,
      pipeModule
    ] });
  }
};

// src/app/modules/side-menu/side-menu.component.ts
var _c02 = (a0, a1) => ({ "active": a0, "ng-star-inserted": a1 });
var _c12 = (a0) => ({ "active1": a0 });
var _c2 = (a0, a1) => ({ "help_active": a0, "help_link": a1 });
function SideMenuComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "li", 6);
    \u0275\u0275listener("click", function SideMenuComponent_ng_container_2_ng_container_1_Template_li_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ele_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sidemenuService.goToLink(ele_r2.TableId));
    });
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275element(3, "img", 8);
    \u0275\u0275elementStart(4, "p", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ele_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngbTooltip", ele_r2.ModuleName)("ngClass", \u0275\u0275pureFunction2(5, _c02, ele_r2.TableId === ctx_r2.sidemenuService.selectedModuleId, ele_r2.TableId !== ctx_r2.sidemenuService.selectedModuleId));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.sidemenuService.getImage(ele_r2.TableId), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c12, ele_r2.TableId === ctx_r2.sidemenuService.selectedModuleId));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ele_r2.ModuleName, "");
  }
}
function SideMenuComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SideMenuComponent_ng_container_2_ng_container_1_Template, 6, 10, "ng-container", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ele_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r2.isClinicBko && (ele_r2.TableId === 226 || ele_r2.TableId === 85 || ele_r2.TableId === 8 || ele_r2.TableId === 7 || ele_r2.TableId === 185)) || ele_r2.TableId === 85 && ctx_r2.isCSR);
  }
}
function SideMenuComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 10);
    \u0275\u0275element(1, "img", 11);
    \u0275\u0275elementEnd();
  }
}
function SideMenuComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 12)(1, "span")(2, "img", 13);
    \u0275\u0275listener("click", function SideMenuComponent_span_4_Template_img_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.commonService.onlineHelp(ctx_r2.helpObj.PageID));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngbTooltip", ctx_r2.sidemenuService.getMenuName(ctx_r2.helpMenuId))("ngClass", \u0275\u0275pureFunction2(3, _c2, ctx_r2.helpMenuId === ctx_r2.sidemenuService.selectedModuleId, ctx_r2.helpMenuId !== ctx_r2.sidemenuService.selectedModuleId));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.sidemenuService.getMenuName(ctx_r2.helpMenuId));
  }
}
var SideMenuComponent = class _SideMenuComponent {
  constructor(router, labelService, headerService, sidemenuService, dataService, commonService) {
    this.router = router;
    this.labelService = labelService;
    this.headerService = headerService;
    this.sidemenuService = sidemenuService;
    this.dataService = dataService;
    this.commonService = commonService;
    this.helpMenuId = 0;
    this.LogoutAdminMenuId = 0;
    this.SideMenuList = [];
    this.isConsultUser = localStorage.authDetails != void 0 && (JSON.parse(localStorage.authDetails).UserTypeId == EnmUserType.Consult || JSON.parse(localStorage.authDetails).UserTypeId == EnmUserType.ConsultAdmin) ? true : false;
    this.showResponsiveMenu = false;
    this.authDetails = this.dataService.appData.authDetails;
    this.helpMenuId = EnmModule.Help;
    this.LogoutAdminMenuId = EnmModule.LogoutAdmin;
    const clinicbko = JSON.parse(localStorage.getItem("bckBusinessInfo"));
    if (clinicbko != "null" && clinicbko != "undefined" && clinicbko)
      this.isClinicBko = true;
    if (this.labelService.dsLabelData.length == 0) {
      this.getLabelDetails();
    } else {
      this.labelService.bindSideMenuLabel();
    }
    if (this.sidemenuService.dsSideMenu.length == 0) {
      this.sidemenuService.getSideMenu(this.headerService.userTypeId, this.labelService.selectedLanguage, this.labelService.userCountryId, false);
    }
  }
  getLabelDetails() {
    this.labelService.getLabelDetails(null, this.labelService.selectedLanguage).subscribe((data) => {
      this.labelService.dsLabelData = data.ResponseData;
      this.labelService.bindSideMenuLabel();
    });
  }
  // public getSideMenuList(userTypeId: number, languageId: number, isRedirect?: boolean) {
  //   this.sidemenuService.getUserModuleByUserTypeId(userTypeId, languageId).subscribe(data => {
  //     let img = "./assets/img/";
  //     this.SideMenuList = data.ResponseData.map(ele => {
  //       if (ele.ModuleId == EnmModule.Dashboard) {
  //         ele.img = img + "dashboard@2x.png";
  //         ele.url = '/dashboard';
  //       }
  //       if (ele.ModuleId == EnmModule.Patients) {
  //         ele.img = img + "patients@2x.png";
  //         ele.url = '/patient/list';
  //       }
  //       if (ele.ModuleId == EnmModule.ClinicManagement) {
  //         ele.img = img + "clinic-icon@2x.png";
  //         ele.url = '/fuse/list';
  //       }
  //       if (ele.ModuleId == EnmModule.UserManagement) {
  //         ele.img = img + "dvm-icon@2x.png";
  //         ele.url = '/user/list';
  //       }
  //       if (ele.ModuleId == EnmModule.RotorCreditRequest) {
  //         ele.img = img + "vetscan-img@2x.png";
  //         ele.url = '/rotor-firstScreen';
  //       }
  //       if (ele.ModuleId == EnmModule.dos) {
  //         ele.img = img + "dos.svg";
  //         ele.url = '/refLab/dos';
  //       }
  //       if (ele.ModuleId == EnmModule.orders) {
  //         ele.img = img + "order.svg";
  //         ele.url = '/refLab/orders';
  //       }
  //       if (ele.ModuleId == EnmModule.Help) {
  //         ele.img = img + "help-munu-icon@2x.png";
  //         ele.url = '/help';
  //       }
  //       if (ele.ModuleId == EnmModule.Support) {
  //         ele.img = img + "Support.svg";
  //         ele.url = '/dashboard'; //=============================not implemented====
  //       }
  //       if (ele.ModuleId == EnmModule.BackOfficeManagement) {
  //         ele.img = img + "backoffice_dashboard@2x.png";
  //         ele.url = '/bko/user/list';
  //       }
  //       if (ele.ModuleId == EnmModule.ClinicAndUserDetails) {
  //         ele.img = img + "clinic-icon@2x.png";
  //         ele.url = '/bko/clinicuser';
  //       }
  //       if (ele.ModuleId == EnmModule.Analytics) {
  //         ele.img = img + "analytics@2x.png";
  //         ele.url = '/bko/analytics';
  //       }
  //       if (ele.ModuleId == EnmModule.Alerts) {
  //         ele.img = img + "announcement-sidemenu@2x.png";
  //         ele.url = '/bko/alerts';
  //       }
  //       if (ele.ModuleId == EnmModule.FuseKey) {
  //         ele.img = img + "fuse_key.png";
  //         ele.url = '/bko/fuseKey';
  //       }
  //       if (ele.ModuleId == EnmModule.LogoutAdmin) {
  //         ele.img = img + "logout@2x.png";
  //         ele.url = '/backoffice';
  //       }
  //       // if (ele.ModuleId == EnmModule.Dashboard){
  //       //   ele.img = img + "dashboard@2x.png";
  //       //   ele.url = '/dashboard';
  //       // }
  //       return ele;
  //     });
  //     if (isRedirect) {
  //       // this.goToLink(data.ResponseData[0].TableId);
  //     }
  //   });
  // }
  ngAfterViewInit() {
    this.sidemenuService.getSelectedModuleId();
  }
  ngOnInit() {
    this.isCSR = this.commonService.checkIsCsr()[0];
    this.commonService.menuToggle.subscribe((resp) => {
      this.showResponsiveMenu = !this.showResponsiveMenu;
    });
    setTimeout(() => {
      $("#bkosidebarCollapse").on("click", function() {
        $("#sidebar ,#content").toggleClass("active");
      });
      $(".outer, .navblock,.example-container1 ,.dropdown-toggle").on("click", function() {
        $("#sidebar").addClass("active");
        $("#content").removeClass("active");
      });
    }, 100);
    this.helpObj = this.dataService.appData.helpTopics.find((e) => e.HelpTopic == "Home");
  }
  static {
    this.\u0275fac = function SideMenuComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SideMenuComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LabelService), \u0275\u0275directiveInject(HeaderService), \u0275\u0275directiveInject(SidemenuService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(CommonService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SideMenuComponent, selectors: [["app-side-menu"]], decls: 5, vars: 6, consts: [["id", "sidebar"], [1, "list-unstyled", "components", "fixed-menu"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active1", "placement", "right", "class", "ng-star-inserted", 4, "ngIf"], ["placement", "right", 3, "ngbTooltip", "ngClass", 4, "ngIf"], [4, "ngIf"], ["routerLinkActive", "active1", "placement", "right", 3, "click", "ngbTooltip", "ngClass"], [2, "margin-left", "10px", "margin-top", "20px"], ["alt", "", "width", "23", 3, "src"], [1, "module-name", 3, "ngClass"], ["routerLinkActive", "active1", "placement", "right", 1, "ng-star-inserted"], ["src", "", "alt", ""], ["placement", "right", 3, "ngbTooltip", "ngClass"], ["src", "../../../../assets/img/help-munu-icon@2x.png", "alt", "gdgf", 3, "click"], [1, "module-name"]], template: function SideMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "ul", 1);
        \u0275\u0275template(2, SideMenuComponent_ng_container_2_Template, 2, 1, "ng-container", 2)(3, SideMenuComponent_li_3_Template, 2, 0, "li", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, SideMenuComponent_span_4_Template, 5, 6, "span", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMapInterpolate1("active ", ctx.showResponsiveMenu ? "Mobileactive" : "", "");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.sidemenuService.dsSideMenu);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isConsultUser === true);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isConsultUser !== true);
      }
    }, dependencies: [NgClass, NgForOf, NgIf, RouterLinkActive, NgbTooltip], styles: ['\n\nbody[_ngcontent-%COMP%] {\n  background: #fafafa;\n}\np[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  font-weight: 300;\n  line-height: 1.7em;\n  color: #999;\n}\na[_ngcontent-%COMP%], \na[_ngcontent-%COMP%]:hover, \na[_ngcontent-%COMP%]:focus {\n  color: #000;\n  text-decoration: none;\n  transition: all 0.3s;\n}\n.navbar[_ngcontent-%COMP%] {\n  padding: 15px 10px;\n  background: #fff;\n  border: none;\n  border-radius: 0;\n  margin-bottom: 40px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n}\n.navbar-btn[_ngcontent-%COMP%] {\n  box-shadow: none;\n  outline: none !important;\n  border: none;\n}\n.line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px dashed #ddd;\n  margin: 40px 0;\n}\ni[_ngcontent-%COMP%], \nspan[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: "GothamNarrowBold", sans-serif;\n  color: #181c20;\n  font-size: 13px;\n  font-weight: bold;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n}\n#sidebar[_ngcontent-%COMP%] {\n  min-width: 280px;\n  max-width: 280px;\n  color: #fff;\n  transition: all 0.3s;\n  padding: 0px;\n  display: flex;\n  margin-top: 55px;\n}\n#sidebar.active[_ngcontent-%COMP%] {\n  min-width: 155px;\n  max-width: 155px;\n}\n#sidebar.active[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n#sidebar.active[_ngcontent-%COMP%]   .CTAs[_ngcontent-%COMP%] {\n  display: none;\n}\n#sidebar.active[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-align: left;\n}\n#sidebar.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  text-align: center;\n  font-size: 0.85em;\n}\n#sidebar.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  display: block;\n  font-size: 1.8em;\n  margin-bottom: 5px;\n}\n#sidebar.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px !important;\n}\n#sidebar.active[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  top: auto;\n  bottom: 10px;\n  right: 50%;\n  -webkit-transform: translateX(50%);\n  -ms-transform: translateX(50%);\n  transform: translateX(50%);\n}\n#sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #127ed6;\n}\n#sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: none;\n  font-size: 1.8em;\n}\n#sidebar[_ngcontent-%COMP%]   ul.components[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  background: #fff;\n  width: 100%;\n  margin: 0;\n  height: calc(100vh - 55px);\n  z-index: 10;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 25px;\n  font-size: 1.1em;\n  display: block;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\na[data-toggle=collapse][_ngcontent-%COMP%] {\n  position: relative;\n}\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: block;\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  transform: translateY(-50%);\n}\nul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.9em !important;\n  padding-left: 30px !important;\n  background: #6d7fcc;\n}\nul.CTAs[_ngcontent-%COMP%] {\n  padding: 20px;\n}\nul.CTAs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.9em !important;\n  display: block;\n  border-radius: 5px;\n  margin-bottom: 5px;\n}\na.download[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #7386d5;\n}\na.article[_ngcontent-%COMP%], \na.article[_ngcontent-%COMP%]:hover {\n  background: #6d7fcc !important;\n  color: #fff !important;\n}\n#content[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  min-height: 100vh;\n  transition: all 0.3s;\n}\n.sidebar-header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \n.components[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 62px;\n  display: flex;\n  align-items: center;\n}\n.fixed-menu[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      100% 100% at 0% 10.61%,\n      #6fb0c7 13.98%,\n      #035771 87.81%) !important;\n  width: 155px !important;\n  max-width: 155px;\n  min-width: 155px !important;\n}\n.module-name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 0.9em !important;\n  font-family: "gothambook", sans-serif;\n  line-height: 1.1;\n  padding-top: 3px;\n}\n.module-name.active1[_ngcontent-%COMP%] {\n  color: #0e6bc5 !important;\n  background: #fff !important;\n}\n.fixed-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 60px !important;\n  cursor: pointer;\n  margin-bottom: 0.2rem;\n}\n.fixed-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n  min-width: 155px;\n  padding-left: 0.5rem;\n  font-weight: 300;\n  padding-right: 2.5rem;\n  padding-bottom: 0.3rem;\n}\n.active[_ngcontent-%COMP%]   .toggle-menu[_ngcontent-%COMP%] {\n  display: block;\n}\n.fixed-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background: #fff;\n  outline: none !important;\n  border-right: 3px solid #ff5c00;\n}\n.fixed-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n.active1[_ngcontent-%COMP%] {\n  background: rgba(167, 170, 189, 0.15);\n}\n.toggle-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #000;\n  text-decoration: none;\n  transition: all 0.3s;\n  padding-left: 25px;\n  cursor: pointer;\n  font-size: 15px;\n}\n.toggle-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.active[_ngcontent-%COMP%]   .toggle-menu[_ngcontent-%COMP%] {\n  display: none;\n}\n.mat-icon-button[_ngcontent-%COMP%] {\n  padding: 0;\n  min-width: 0;\n  width: 40px;\n  height: 40px !important;\n  flex-shrink: 0;\n  line-height: 40px;\n  border-radius: 50%;\n}\n.whitelogo[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 38px;\n  left: 70px;\n  display: none;\n}\n.organe-logo[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 38px;\n  left: 97px;\n  display: block;\n}\n.organe-logo[_ngcontent-%COMP%] {\n  transition: all 5s;\n}\nnav.active[_ngcontent-%COMP%]   .organe-logo[_ngcontent-%COMP%] {\n  display: none;\n  transition: all 5s;\n}\n.help_link[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 20px;\n  display: flex;\n  align-items: center;\n  padding-right: 24px;\n  z-index: 10;\n  font-family: "gothambook", sans-serif;\n  font-size: 15px;\n  min-width: 135px;\n}\n.help_link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: bold;\n}\n.help_active[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2px;\n  left: 0px;\n  display: flex;\n  align-items: center;\n  background: #0072ce;\n  outline: none !important;\n  padding-right: 0;\n  width: 67px;\n  justify-content: center;\n  height: 65px;\n  cursor: pointer;\n}\n.fixed-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  display: none;\n}\n.toggle-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  position: absolute;\n  bottom: 3px;\n  display: flex;\n  align-items: center;\n  padding-right: 24px;\n  width: 207px;\n}\n@media (max-width: 1025px) {\n  .whitelogo[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .organe-logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #sidebar.active.Mobileactive[_ngcontent-%COMP%] {\n    left: 0;\n  }\n}\n@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {\n  .help_link[_ngcontent-%COMP%] {\n    bottom: 18px;\n  }\n  .toggle-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    bottom: 0;\n    padding-top: 3%;\n  }\n  #sidebar.active.Mobileactive[_ngcontent-%COMP%] {\n    left: 0;\n  }\n}\n@media screen and (min-width: 1025px) and (max-width:1365px) {\n  .components[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 50px;\n  }\n  .components[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15px !important;\n  }\n  .module-name[_ngcontent-%COMP%] {\n    font-size: 0.8em !important;\n  }\n  .fixed-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 46px !important;\n  }\n  .help_link[_ngcontent-%COMP%] {\n    bottom: -10px;\n  }\n  .help_link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15px !important;\n  }\n}\n.components[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 17px;\n}\n@media screen and (min-width: 1366px) and (max-width:1440px) {\n  .components[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 60px;\n  }\n  .components[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15px !important;\n  }\n  .module-name[_ngcontent-%COMP%] {\n    font-size: 0.8em !important;\n  }\n  .fixed-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 54px !important;\n  }\n  .fixed-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    padding-right: 3rem;\n  }\n  .help_link[_ngcontent-%COMP%] {\n    bottom: 0px;\n  }\n  .help_link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15px !important;\n  }\n}\n@media screen and (min-width: 768px) and (max-width:900px) {\n  .components[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 35px;\n  }\n  .components[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 17px;\n  }\n}\n@media screen and (min-width: 901px) and (max-width:1024px) {\n  .components[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 40px;\n  }\n  .components[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 18px;\n  }\n}\n@media screen and (min-width: 768px) and (max-width:1024px) {\n  .toggle-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    bottom: 80px;\n  }\n  .components[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 52px;\n  }\n  .help_link[_ngcontent-%COMP%] {\n    bottom: 97px;\n  }\n}\n@media screen and (min-width: 801px) and (max-width:1080px) {\n  .toggle-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    bottom: 80px;\n  }\n  .help_link[_ngcontent-%COMP%] {\n    bottom: 97px;\n  }\n}\n@media only screen and (min-device-width: 810px) and (max-device-width: 1080px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio:0) {\n  .toggle-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    bottom: 98px;\n  }\n}\n@media screen and (min-width:321px) and (max-width: 400px) {\n  .sidebar-header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \n   .components[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 56px;\n  }\n}\n@media screen and (min-width:401px) and (max-width: 767px) {\n  .sidebar-header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \n   .components[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 56px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .fixed-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 55px !important;\n    cursor: pointer;\n  }\n  #sidebar[_ngcontent-%COMP%]   ul.components[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .help_link[_ngcontent-%COMP%] {\n    left: 55px;\n    bottom: 24px !important;\n  }\n}\n@media screen and (max-width: 320px) {\n  .sidebar-header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \n   .components[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 50px;\n  }\n}\n@media only screen and (min-device-width: 376px) and (max-device-width: 450px) and (-webkit-min-device-pixel-ratio: 2) {\n  .help_link[_ngcontent-%COMP%] {\n    bottom: 105px;\n  }\n  .toggle-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    bottom: 86px;\n  }\n}\n/*# sourceMappingURL=side-menu.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SideMenuComponent, { className: "SideMenuComponent", filePath: "src\\app\\modules\\side-menu\\side-menu.component.ts", lineNumber: 18 });
})();

// src/app/modules/side-menu/side-menu.module.ts
var SideMenuModule = class _SideMenuModule {
  static {
    this.\u0275fac = function SideMenuModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SideMenuModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SideMenuModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      MatModule
    ] });
  }
};

export {
  HeaderComponent,
  SideMenuComponent,
  PhysicianFilterPipe,
  LocalDatePipe,
  CapitalizePipe,
  pipeModule,
  HeaderModule,
  SideMenuModule
};
//# sourceMappingURL=chunk-YS4O5PGJ.js.map
