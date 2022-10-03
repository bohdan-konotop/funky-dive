import { Component, OnInit } from '@angular/core';
import { playlists } from './playlists';
import { Playlist } from '@interfaces';

@Component({
  selector: 'app-random-word',
  templateUrl: './random-video.component.html',
  styleUrls: ['./random-video.component.scss'],
})
export class RandomVideoComponent implements OnInit {
  public loading = false;
  public playlistLink = '';
  public playlistIndex = 0;

  ngOnInit() {
    this.randomize(1500);
  }

  public randomize(timeout: number = 800): void {
    this.loading = true;
    setTimeout(() => (this.loading = false), timeout);

    const playlist = this.findPlaylist();

    this.playlistLink = playlist.playlistLink;
    this.playlistIndex = this.getRandomArbitrary(0, playlist.length);
  }

  private findPlaylist(): Playlist {
    return playlists[this.getRandomArbitrary(0, playlists.length)];
  }

  private getRandomArbitrary(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
}
