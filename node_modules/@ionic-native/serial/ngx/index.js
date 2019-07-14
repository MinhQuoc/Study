var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var Serial = /** @class */ (function (_super) {
    __extends(Serial, _super);
    function Serial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Serial.prototype.requestPermission = function (options) { return cordova(this, "requestPermission", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Serial.prototype.open = function (options) { return cordova(this, "open", {}, arguments); };
    Serial.prototype.write = function (data) { return cordova(this, "write", {}, arguments); };
    Serial.prototype.writeHex = function (data) { return cordova(this, "writeHex", {}, arguments); };
    Serial.prototype.read = function () { return cordova(this, "read", {}, arguments); };
    Serial.prototype.registerReadCallback = function () { return cordova(this, "registerReadCallback", { "observable": true }, arguments); };
    Serial.prototype.close = function () { return cordova(this, "close", {}, arguments); };
    Serial.pluginName = "Serial";
    Serial.plugin = "cordovarduino";
    Serial.pluginRef = "serial";
    Serial.repo = "https://github.com/xseignard/cordovarduino";
    Serial.platforms = ["Android", "Ubuntu"];
    Serial = __decorate([
        Injectable()
    ], Serial);
    return Serial;
}(IonicNativePlugin));
export { Serial };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3NlcmlhbC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQXlETiwwQkFBaUI7Ozs7SUFXM0Msa0NBQWlCLGFBQUMsT0FBaUM7SUFXbkQscUJBQUksYUFBQyxPQUEwQjtJQVcvQixzQkFBSyxhQUFDLElBQVM7SUFXZix5QkFBUSxhQUFDLElBQVM7SUFVbEIscUJBQUk7SUFZSixxQ0FBb0I7SUFVcEIsc0JBQUs7Ozs7OztJQTVFTSxNQUFNO1FBRGxCLFVBQVUsRUFBRTtPQUNBLE1BQU07aUJBM0RuQjtFQTJENEIsaUJBQWlCO1NBQWhDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZGVjbGFyZSB2YXIgc2VyaWFsOiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VyaWFsUGVybWlzc2lvbk9wdGlvbnMge1xuICB2aWQ6IHN0cmluZztcbiAgcGlkOiBzdHJpbmc7XG4gIGRyaXZlcjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcmlhbE9wZW5PcHRpb25zIHtcbiAgYmF1ZFJhdGU6IG51bWJlcjtcbiAgZGF0YUJpdHM6IG51bWJlcjtcbiAgc3RvcEJpdHM6IG51bWJlcjtcbiAgcGFyaXR5OiBudW1iZXI7XG4gIGR0cjogYm9vbGVhbjtcbiAgcnRzOiBib29sZWFuO1xuICBzbGVlcE9uUGF1c2U6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgU2VyaWFsXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHByb3ZpZGVzIGZ1bmN0aW9ucyBmb3Igd29ya2luZyB3aXRoIFNlcmlhbCBjb25uZWN0aW9uc1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgU2VyaWFsIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9zZXJpYWwvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcmlhbDogU2VyaWFsKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnNlcmlhbC5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oKCkgPT4ge1xuICogICB0aGlzLnNlcmlhbC5vcGVuKHtcbiAqICAgICBiYXVkUmF0ZTogOTgwMCxcbiAqICAgICBkYXRhQml0czogNCxcbiAqICAgICBzdG9wQml0czogMSxcbiAqICAgICBwYXJpdHk6IDAsXG4gKiAgICAgZHRyOiB0cnVlLFxuICogICAgIHJ0czogdHJ1ZSxcbiAqICAgICBzbGVlcE9uUGF1c2U6IGZhbHNlXG4gKiAgIH0pLnRoZW4oKCkgPT4ge1xuICogICAgIGNvbnNvbGUubG9nKCdTZXJpYWwgY29ubmVjdGlvbiBvcGVuZWQnKTtcbiAqICAgfSk7XG4gKiB9KS5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTZXJpYWwnLFxuICBwbHVnaW46ICdjb3Jkb3ZhcmR1aW5vJyxcbiAgcGx1Z2luUmVmOiAnc2VyaWFsJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS94c2VpZ25hcmQvY29yZG92YXJkdWlubycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ1VidW50dSddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlcmlhbCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFJlcXVlc3QgcGVybWlzc2lvbiB0byBjb25uZWN0IHRvIGEgc2VyaWFsIGRldmljZVxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyB7U2VyaWFsUGVybWlzc2lvbk9wdGlvbnN9IE9wdGlvbnMgdXNlZCB0byByZXF1ZXN0IHNlcmlhbCBwZXJtaXNzaW9ucyBmb3IgYW4gdW5rbm93biBkZXZpY2VcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gcGVybWlzc2lvbnMgYXJlIGdyYW50ZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMlxuICB9KVxuICByZXF1ZXN0UGVybWlzc2lvbihvcHRpb25zPzogU2VyaWFsUGVybWlzc2lvbk9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIGNvbm5lY3Rpb24gdG8gYSBzZXJpYWwgZGV2aWNlXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zIHtTZXJpYWxPcGVuT3B0aW9uc30gT3B0aW9ucyB1c2VkIHRvIG9wZW4gc2VyaWFsIGNvbm5lY3Rpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHNlcmlhbCBjb25uZWN0aW9uIGlzIG9wZW5lZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBvcGVuKG9wdGlvbnM6IFNlcmlhbE9wZW5PcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogV3JpdGUgdG8gYSBzZXJpYWwgY29ubmVjdGlvblxuICAgKlxuICAgKiBAcGFyYW0gZGF0YSB7YW55fSBkYXRhIHRvIHdyaXRlIHRvIHRoZSBzZXJpYWwgY29ubmVjdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgd3JpdGUgaXMgY29tcGxldGVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgd3JpdGUoZGF0YTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogV3JpdGUgaGV4IHRvIGEgc2VyaWFsIGNvbm5lY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIGRhdGEge2FueX0gZGF0YSB0byB3cml0ZSB0byB0aGUgc2VyaWFsIGNvbm5lY3Rpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHdyaXRlIGlzIGNvbXBsZXRlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHdyaXRlSGV4KGRhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgZnJvbSBhIHNlcmlhbCBjb25uZWN0aW9uXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGRhdGEgcmVhZCBmcm9tIHRoZSBzZXJpYWwgY29ubmVjdGlvblxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZWFkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoIHRoZSBpbmNvbWluZyBkYXRhIGZyb20gdGhlIHNlcmlhbCBjb25uZWN0aW9uLiBDbGVhciB0aGUgd2F0Y2ggYnkgdW5zdWJzY3JpYmluZyBmcm9tIHRoZSBvYnNlcnZhYmxlXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IE9ic2VydmFibGUgcmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgeW91IGNhbiBzdWJzY3JpYmUgdG9cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlXG4gIH0pXG4gIHJlZ2lzdGVyUmVhZENhbGxiYWNrKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlIHRoZSBzZXJpYWwgY29ubmVjdGlvblxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgc2VyaWFsIGNvbm5lY3Rpb24gaXMgY2xvc2VkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGNsb3NlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=