import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/http/auth/auth.service';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {

    // Collapse/Expand icon
    // $('#collapse-icon').attr('name', 'arrowRightSquare');

    // Collapse click
    $('[data-toggle=sidebar-colapse]').click(function() {
        SidebarCollapse();
    });

    function SidebarCollapse () {

      $('.menu-collapsed').toggleClass('d-none');
      $('.sidebar-submenu').toggleClass('d-none');
      $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
      
      // Treating d-flex/d-none on separators with title
      var SeparatorTitle = $('.sidebar-separator-title');
      if ( SeparatorTitle.hasClass('d-flex') ) {
          SeparatorTitle.removeClass('d-flex');
      } else {
          SeparatorTitle.addClass('d-flex');
      }
      
      // Collapse/Expand icon
      $('.collapse-icon').attr('style', (_, attr) => attr === 'display: none;' ? 'display: inline;' : 'display: none;');
    }

  }

  logout() {
    this.auth.logout();
  }

}
